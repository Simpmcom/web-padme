// ============================================================
// FILE: Code.gs — Google Apps Script Nhận Dữ Liệu Chatbot Lead
// ============================================================
// HƯỚNG DẪN:
// 1. Tạo Google Sheets mới, đặt tên "Chatbot Leads Database"
// 2. Tạo 7 cột header ở dòng 1: Thời gian | Tên | SĐT | Email | Nguồn | Session ID | Lịch sử Chat
// 3. Copy Spreadsheet ID từ URL và dán vào dòng YOUR_SPREADSHEET_ID bên dưới
// 4. Vào Extensions → Apps Script → dán code này vào
// 5. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone
// 6. Copy URL deploy → dán vào GOOGLE_SCRIPT_URL trong Chatbot.jsx

function doPost(e) {
  try {
    // ⚠️ THAY SPREADSHEET ID THẬT CỦA BẠN VÀO ĐÂY
    var sheet = SpreadsheetApp.openById('1n81tWwhWFi0rUo-CDMIQrp0HamgtRbrQW8SyJ7ZImsA').getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var newTime      = data.timestamp || new Date().toLocaleString('vi-VN');
    var newName      = data.name || '';
    var newPhone     = data.phone || '';
    var newEmail     = data.email || '';
    var newSource    = data.source || '';
    var newSessionId = data.sessionId || '';
    var newHistory   = data.chatHistory || '';

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
      
      // Cập nhật thời gian tương tác mới nhất
      sheet.getRange(rowIndexToUpdate, 1).setValue(newTime);
    } else {
      // === TẠO DÒNG MỚI (Session chưa tồn tại) ===
      sheet.appendRow([newTime, newName, newPhone, newEmail, newSource, newSessionId, newHistory]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("API Chatbot Leads đang hoạt động! ✅");
}
