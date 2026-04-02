// ============================================================
// FILE: Code.gs — Google Apps Script Nhận Dữ Liệu Chatbot Lead (Nâng Cao)
// ============================================================
// HƯỚNG DẪN:
// 1. Tạo Google Sheets mới, đặt tên "Chatbot Leads Database"
// 2. Tạo 9 cột header ở dòng 1:
//    Thời gian | Tên | SĐT | Email | Nguồn | Session ID | Lịch sử Chat | Quan tâm | Mức độ
// 3. Copy Spreadsheet ID từ URL và dán vào dòng bên dưới
// 4. Cập nhật EMAIL nhận cảnh báo ở biến SALES_EMAIL
// 5. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone
// 6. Copy URL deploy → dán vào GOOGLE_SCRIPT_URL trong Chatbot.jsx

// ⚠️ CẤU HÌNH — THAY BẰNG THÔNG TIN THẬT CỦA BẠN
var SPREADSHEET_ID = '1n81tWwhWFi0rUo-CDMIQrp0HamgtRbrQW8SyJ7ZImsA';
var SALES_EMAIL = 'kuonzgjk@gmail.com'; // Email nhận cảnh báo khách HOT

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var newTime        = data.timestamp || new Date().toLocaleString('vi-VN');
    var newName        = data.name || '';
    var newPhone       = data.phone || '';
    var newEmail       = data.email || '';
    var newSource      = data.source || '';
    var newSessionId   = data.sessionId || '';
    var newHistory     = data.chatHistory || '';
    var newInterest    = data.interest || '';
    var newIntentLevel = data.intent_level || '';

    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();
    var rowIndexToUpdate = -1;

    // Tìm xem Session ID đã tồn tại chưa (cột F = index 5)
    if (newSessionId) {
      for (var i = values.length - 1; i > 0; i--) { 
        var rowSessionId = values[i][5] ? values[i][5].toString().trim() : '';
        if (rowSessionId === newSessionId) {
          rowIndexToUpdate = i + 1; // Chuyển sang 1-indexed cho Sheets API
          break;
        }
      }
    }

    if (rowIndexToUpdate > -1) {
      // === CẬP NHẬT GỘP (Chỉ ghi đè nếu thông tin cũ đang trống) ===
      var currentRow = values[rowIndexToUpdate - 1];
      if (!currentRow[1] && newName)  sheet.getRange(rowIndexToUpdate, 2).setValue(newName);
      if (!currentRow[2] && newPhone) sheet.getRange(rowIndexToUpdate, 3).setValue(newPhone);
      if (!currentRow[3] && newEmail) sheet.getRange(rowIndexToUpdate, 4).setValue(newEmail);
      
      // Luôn cập nhật lịch sử chat bằng bản mới nhất (đầy đủ hơn)
      if (newHistory) sheet.getRange(rowIndexToUpdate, 7).setValue(newHistory);
      
      // Cập nhật Quan tâm & Mức độ (chỉ ghi đè nếu có giá trị mới)
      if (newInterest)    sheet.getRange(rowIndexToUpdate, 8).setValue(newInterest);
      if (newIntentLevel) sheet.getRange(rowIndexToUpdate, 9).setValue(newIntentLevel);
      
      // Cập nhật thời gian tương tác mới nhất
      sheet.getRange(rowIndexToUpdate, 1).setValue(newTime);

      // Kiểm tra cảnh báo HOT (khi cập nhật intent_level thành hot)
      if (newIntentLevel === 'hot') {
        sendHotLeadAlert(newName || currentRow[1], newPhone || currentRow[2], newEmail || currentRow[3], newInterest || currentRow[7], newTime);
      }
    } else {
      // === TẠO DÒNG MỚI (Session chưa tồn tại) ===
      sheet.appendRow([newTime, newName, newPhone, newEmail, newSource, newSessionId, newHistory, newInterest, newIntentLevel]);
      
      // Gửi cảnh báo nếu khách mới là HOT
      if (newIntentLevel === 'hot') {
        sendHotLeadAlert(newName, newPhone, newEmail, newInterest, newTime);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Gửi email cảnh báo khi phát hiện khách hàng HOT
 */
function sendHotLeadAlert(name, phone, email, interest, timestamp) {
  try {
    var subject = '🔥 KHÁCH HÀNG NÓNG - CẦN LIÊN HỆ NGAY!';
    var body = '📢 KHÁCH HÀNG NÓNG - CẦN LIÊN HỆ NGAY!\n'
      + '============================================\n\n'
      + '👤 Tên: ' + (name || 'Chưa cung cấp') + '\n'
      + '📞 SĐT: ' + (phone || 'Chưa cung cấp') + '\n'
      + '📧 Email: ' + (email || 'Chưa cung cấp') + '\n'
      + '🎯 Quan tâm: ' + (interest || 'Chưa xác định') + '\n'
      + '🕐 Thời gian: ' + timestamp + '\n\n'
      + '⚡ Vui lòng liên hệ khách hàng này trong vòng 30 phút!\n'
      + '============================================\n'
      + 'Email này được gửi tự động từ Chatbot AI trên website PADME.';
    
    MailApp.sendEmail(SALES_EMAIL, subject, body);
    Logger.log('📧 Đã gửi email cảnh báo khách HOT đến: ' + SALES_EMAIL);
  } catch (err) {
    Logger.log('⚠️ Không gửi được email cảnh báo: ' + err.toString());
  }
}

function doGet() {
  return ContentService.createTextOutput("API Chatbot Leads Nâng Cao đang hoạt động! ✅ (v2: Phân loại khách hàng)");
}
