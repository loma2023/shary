function doGet(e) {
    var op = e.parameter.action;
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Jp86IjCi8icB6XKz_x1IH5sLAe7R0EZ4VdsxlwAR0Ks/edit#gid=0");
    var sheet = ss.getSheetByName("Products");
  
    if (op == "insert")
      return insert_value(e, sheet);
  
    if (op == "read")
      return read_value(e, ss);
  
    if (op == "update")
      return update_value(e, sheet);
  
    if (op == "delete")
      return delete_value(e, sheet);
  
    let data = sheet.getDataRange().getValues();
    return ContentService.createTextOutput(JSON.stringify(data)
    ).setMimeType(ContentService.MimeType.JSON)
  
  }
  
  function insert_value(request, sheet) {
    let i = sheet.getLastRow() + 1;
  
    sheet.getRange(i, 1).setValue(request.parameter.id);
    sheet.getRange(i, 2).setValue(request.parameter.name);
    sheet.getRange(i, 3).setValue(request.parameter.details);
    sheet.getRange(i, 4).setValue(request.parameter.price1);
    sheet.getRange(i, 5).setValue(request.parameter.price2);
    sheet.getRange(i, 6).setValue(request.parameter.price3);
    sheet.getRange(i, 7).setValue(request.parameter.price4);
    sheet.getRange(i, 8).setValue(request.parameter.price5);
    sheet.getRange(i, 9).setValue(request.parameter.price6);
    sheet.getRange(i, 10).setValue(request.parameter.price7);
    sheet.getRange(i, 11).setValue(request.parameter.photo1);
    sheet.getRange(i, 12).setValue(request.parameter.photo2);
    sheet.getRange(i, 13).setValue(request.parameter.photo3);
    sheet.getRange(i, 14).setValue(request.parameter.photo4);
    sheet.getRange(i, 15).setValue(request.parameter.photo5);
    sheet.getRange(i, 16).setValue(request.parameter.photo6);
    sheet.getRange(i, 17).setValue(request.parameter.photo7);
    sheet.getRange(i, 18).setValue(request.parameter.color1);
    sheet.getRange(i, 19).setValue(request.parameter.color2);
    sheet.getRange(i, 20).setValue(request.parameter.color3);
    sheet.getRange(i, 21).setValue(request.parameter.color4);
    sheet.getRange(i, 22).setValue(request.parameter.color5);
    sheet.getRange(i, 23).setValue(request.parameter.color6);
    sheet.getRange(i, 24).setValue(request.parameter.color7);
    sheet.getRange(i, 25).setValue(request.parameter.size1);
    sheet.getRange(i, 26).setValue(request.parameter.size2);
    sheet.getRange(i, 27).setValue(request.parameter.size3);
    sheet.getRange(i, 28).setValue(request.parameter.size4);
    sheet.getRange(i, 29).setValue(request.parameter.size5);
    sheet.getRange(i, 30).setValue(request.parameter.size6);
    sheet.getRange(i, 31).setValue(request.parameter.size7);
    sheet.getRange(i, 32).setValue(request.parameter.weight1);
    sheet.getRange(i, 33).setValue(request.parameter.weight2);
    sheet.getRange(i, 34).setValue(request.parameter.weight3);
    sheet.getRange(i, 35).setValue(request.parameter.weight4);
    sheet.getRange(i, 36).setValue(request.parameter.weight5);
    sheet.getRange(i, 37).setValue(request.parameter.weight6);
    sheet.getRange(i, 38).setValue(request.parameter.weight7);
    sheet.getRange(i, 39).setValue(request.parameter.category);
    sheet.getRange(i, 40).setValue(request.parameter.status1);
    sheet.getRange(i, 41).setValue(request.parameter.status2);
  
  
    var result = "Insertion successful";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function update_value(request, sheet) {
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rnu = sheet.getRange(i, 1).getValue();
      if (rnu == request.parameter.id) {
        sheet.getRange(i, 2).setValue(request.parameter.name);
        sheet.getRange(i, 3).setValue(request.parameter.details);
        sheet.getRange(i, 4).setValue(request.parameter.price1);
        sheet.getRange(i, 5).setValue(request.parameter.price2);
        sheet.getRange(i, 6).setValue(request.parameter.price3);
        sheet.getRange(i, 7).setValue(request.parameter.price4);
        sheet.getRange(i, 8).setValue(request.parameter.price5);
        sheet.getRange(i, 9).setValue(request.parameter.price6);
        sheet.getRange(i, 10).setValue(request.parameter.price7);
        sheet.getRange(i, 11).setValue(request.parameter.photo1);
        sheet.getRange(i, 12).setValue(request.parameter.photo2);
        sheet.getRange(i, 13).setValue(request.parameter.photo3);
        sheet.getRange(i, 14).setValue(request.parameter.photo4);
        sheet.getRange(i, 15).setValue(request.parameter.photo5);
        sheet.getRange(i, 16).setValue(request.parameter.photo6);
        sheet.getRange(i, 17).setValue(request.parameter.photo7);
        sheet.getRange(i, 18).setValue(request.parameter.color1);
        sheet.getRange(i, 19).setValue(request.parameter.color2);
        sheet.getRange(i, 20).setValue(request.parameter.color3);
        sheet.getRange(i, 21).setValue(request.parameter.color4);
        sheet.getRange(i, 22).setValue(request.parameter.color5);
        sheet.getRange(i, 23).setValue(request.parameter.color6);
        sheet.getRange(i, 24).setValue(request.parameter.color7);
        sheet.getRange(i, 25).setValue(request.parameter.size1);
        sheet.getRange(i, 26).setValue(request.parameter.size2);
        sheet.getRange(i, 27).setValue(request.parameter.size3);
        sheet.getRange(i, 28).setValue(request.parameter.size4);
        sheet.getRange(i, 29).setValue(request.parameter.size5);
        sheet.getRange(i, 30).setValue(request.parameter.size6);
        sheet.getRange(i, 31).setValue(request.parameter.size7);
        sheet.getRange(i, 32).setValue(request.parameter.weight1);
        sheet.getRange(i, 33).setValue(request.parameter.weight2);
        sheet.getRange(i, 34).setValue(request.parameter.weight3);
        sheet.getRange(i, 35).setValue(request.parameter.weight4);
        sheet.getRange(i, 36).setValue(request.parameter.weight5);
        sheet.getRange(i, 37).setValue(request.parameter.weight6);
        sheet.getRange(i, 38).setValue(request.parameter.weight7);
        sheet.getRange(i, 39).setValue(request.parameter.category1);
        sheet.getRange(i, 40).setValue(request.parameter.status1);
        sheet.getRange(i, 41).setValue(request.parameter.status2);
  
      }
    }
  
    var result = "value updated successfully";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function delete_value(request, sheet) {
    var id = request.parameter.id;
    var flag = 0;
  
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rid = sheet.getRange(i, 1).getValue();
      if (rid == id) {
        sheet.deleteRows(i);
        var result = "value deleted successfully";
        flag = 1;
      }
    }
    if (flag == 0)
      var result = "id not found";
  
    result = JSON.stringify({
      "result": result
    });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function read_value(request, ss) {
    var output = ContentService.createTextOutput(),
      data = {};
    var sheet = "sheet1";
    data.records = readData_(ss, sheet);
    var callback = request.parameters.callback;
    if (callback === undefined) {
      output.setContent(JSON.stringify(data));
    } else {
      output.setContent(callback + "(" + JSON.stringify(data) + ")");
    }
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    return output;
  }
  
  function readData_(ss, sheetname, properties) {
    if (typeof properties == "undefined") {
      properties = getHeaderRow_(ss, sheetname);
      properties = properties.map(function (p) { return p.replace(/\s+/g, '_'); });
    }
  
    var rows = getDataRows_(ss, sheetname),
      data = [];
  
    for (var r = 0, l = rows.length; r < l; r++) {
      var row = rows[r],
        record = {};
      for (var p in properties) {
        record[properties[p]] = row[p];
      }
      data.push(record);
    }
    return data;
  }
  
  function getDataRows_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  }
  
  function getHeaderRow_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  }


  // ============================================================================================================


  function doGet(e) {
    var op = e.parameter.action;
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Jp86IjCi8icB6XKz_x1IH5sLAe7R0EZ4VdsxlwAR0Ks/edit#gid=0");
    var sheet = ss.getSheetByName("City");
  
    if (op == "insert")
      return insert_value(e, sheet);
  
    if (op == "read")
      return read_value(e, ss);
  
    if (op == "update")
      return update_value(e, sheet);
  
    if (op == "delete")
      return delete_value(e, sheet);
  
    let data = sheet.getDataRange().getValues();
    return ContentService.createTextOutput(JSON.stringify(data)
    ).setMimeType(ContentService.MimeType.JSON)
  
  }
  
  function insert_value(request, sheet) {
    let i = sheet.getLastRow() + 1;
  
    sheet.getRange(i, 1).setValue(request.parameter.id);
    sheet.getRange(i, 2).setValue(request.parameter.city);
    sheet.getRange(i, 3).setValue(request.parameter.price_delivery);
  
    var result = "Insertion successful";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function update_value(request, sheet) {
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rnu = sheet.getRange(i, 1).getValue();
      if (rnu == request.parameter.id) {
        sheet.getRange(i, 2).setValue(request.parameter.city);
        sheet.getRange(i, 3).setValue(request.parameter.price_delivery);
  
      }
    }
  
    var result = "value updated successfully";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function delete_value(request, sheet) {
    var id = request.parameter.id;
    var flag = 0;
  
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rid = sheet.getRange(i, 1).getValue();
      if (rid == id) {
        sheet.deleteRows(i);
        var result = "value deleted successfully";
        flag = 1;
      }
    }
    if (flag == 0)
      var result = "id not found";
  
    result = JSON.stringify({
      "result": result
    });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function read_value(request, ss) {
    var output = ContentService.createTextOutput(),
      data = {};
    var sheet = "sheet1";
    data.records = readData_(ss, sheet);
    var callback = request.parameters.callback;
    if (callback === undefined) {
      output.setContent(JSON.stringify(data));
    } else {
      output.setContent(callback + "(" + JSON.stringify(data) + ")");
    }
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    return output;
  }
  
  function readData_(ss, sheetname, properties) {
    if (typeof properties == "undefined") {
      properties = getHeaderRow_(ss, sheetname);
      properties = properties.map(function (p) { return p.replace(/\s+/g, '_'); });
    }
  
    var rows = getDataRows_(ss, sheetname),
      data = [];
  
    for (var r = 0, l = rows.length; r < l; r++) {
      var row = rows[r],
        record = {};
      for (var p in properties) {
        record[properties[p]] = row[p];
      }
      data.push(record);
    }
    return data;
  }
  
  function getDataRows_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  }
  
  function getHeaderRow_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  }

  // ==============================================================================================
  function doGet(e) {
    var op = e.parameter.action;
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Jp86IjCi8icB6XKz_x1IH5sLAe7R0EZ4VdsxlwAR0Ks/edit#gid=0");
    var sheet = ss.getSheetByName("Products");
  
    if (op == "insert")
      return insert_value(e, sheet);
  
    if (op == "read")
      return read_value(e, ss);
  
    if (op == "update")
      return update_value(e, sheet);
  
    if (op == "delete")
      return delete_value(e, sheet);
  
    let data = sheet.getDataRange().getValues();
    return ContentService.createTextOutput(JSON.stringify(data)
    ).setMimeType(ContentService.MimeType.JSON)
  
  }
  
  function insert_value(request, sheet) {
    let i = sheet.getLastRow() + 1;
  
    sheet.getRange(i, 1).setValue(request.parameter.id);
    sheet.getRange(i, 2).setValue(request.parameter.name);
    sheet.getRange(i, 3).setValue(request.parameter.email);
    sheet.getRange(i, 4).setValue(request.parameter.phone);
    sheet.getRange(i, 5).setValue(request.parameter.city);
    sheet.getRange(i, 6).setValue(request.parameter.village);
    sheet.getRange(i, 7).setValue(request.parameter.street);
    sheet.getRange(i, 8).setValue(request.parameter.home);
    sheet.getRange(i, 9).setValue(request.parameter.home);
    sheet.getRange(i, 10).setValue(request.parameter.description);
    sheet.getRange(i, 11).setValue(request.parameter.notes);


    sheet.getRange(i, 12).setValue(request.parameter.item1);
    sheet.getRange(i, 13).setValue(request.parameter.quantity1);
    sheet.getRange(i, 14).setValue(request.parameter.price1);
    sheet.getRange(i, 15).setValue(request.parameter.color1);
    sheet.getRange(i, 16).setValue(request.parameter.size1);
    sheet.getRange(i, 17).setValue(request.parameter.weight1);

    sheet.getRange(i, 18).setValue(request.parameter.item2);
    sheet.getRange(i, 19).setValue(request.parameter.quantity2);
    sheet.getRange(i, 20).setValue(request.parameter.price2);
    sheet.getRange(i, 21).setValue(request.parameter.color2);
    sheet.getRange(i, 22).setValue(request.parameter.size2);
    sheet.getRange(i, 23).setValue(request.parameter.weight2);

    sheet.getRange(i, 24).setValue(request.parameter.item3);
    sheet.getRange(i, 25).setValue(request.parameter.quantity3);
    sheet.getRange(i, 26).setValue(request.parameter.price3);
    sheet.getRange(i, 27).setValue(request.parameter.color3);
    sheet.getRange(i, 28).setValue(request.parameter.size3);
    sheet.getRange(i, 29).setValue(request.parameter.weight3);

    sheet.getRange(i, 30).setValue(request.parameter.item4);
    sheet.getRange(i, 31).setValue(request.parameter.quantity4);
    sheet.getRange(i, 32).setValue(request.parameter.price4);
    sheet.getRange(i, 33).setValue(request.parameter.color4);
    sheet.getRange(i, 34).setValue(request.parameter.size4);
    sheet.getRange(i, 35).setValue(request.parameter.weight4);

    sheet.getRange(i, 36).setValue(request.parameter.item5);
    sheet.getRange(i, 37).setValue(request.parameter.quantity5);
    sheet.getRange(i, 38).setValue(request.parameter.price5);
    sheet.getRange(i, 39).setValue(request.parameter.color5);
    sheet.getRange(i, 40).setValue(request.parameter.size5);
    sheet.getRange(i, 41).setValue(request.parameter.weight5);
    
    sheet.getRange(i, 42).setValue(request.parameter.item6);
    sheet.getRange(i, 43).setValue(request.parameter.quantity6);
    sheet.getRange(i, 44).setValue(request.parameter.price6);
    sheet.getRange(i, 45).setValue(request.parameter.color6);
    sheet.getRange(i, 46).setValue(request.parameter.size6);
    sheet.getRange(i, 47).setValue(request.parameter.weight6);
    
    sheet.getRange(i, 48).setValue(request.parameter.item7);
    sheet.getRange(i, 49).setValue(request.parameter.quantity7);
    sheet.getRange(i, 50).setValue(request.parameter.price7);
    sheet.getRange(i, 51).setValue(request.parameter.color7);
    sheet.getRange(i, 52).setValue(request.parameter.size7);
    sheet.getRange(i, 53).setValue(request.parameter.weight7);

    var result = "Insertion successful";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function update_value(request, sheet) {
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rnu = sheet.getRange(i, 1).getValue();
      if (rnu == request.parameter.id) {
        sheet.getRange(i, 2).setValue(request.parameter.name);
        sheet.getRange(i, 3).setValue(request.parameter.email);
        sheet.getRange(i, 4).setValue(request.parameter.phone);
        sheet.getRange(i, 5).setValue(request.parameter.city);
        sheet.getRange(i, 6).setValue(request.parameter.village);
        sheet.getRange(i, 7).setValue(request.parameter.street);
        sheet.getRange(i, 8).setValue(request.parameter.home);
        sheet.getRange(i, 9).setValue(request.parameter.home);
        sheet.getRange(i, 10).setValue(request.parameter.description);
        sheet.getRange(i, 11).setValue(request.parameter.notes);
    
    
        sheet.getRange(i, 12).setValue(request.parameter.item1);
        sheet.getRange(i, 13).setValue(request.parameter.quantity1);
        sheet.getRange(i, 14).setValue(request.parameter.price1);
        sheet.getRange(i, 15).setValue(request.parameter.color1);
        sheet.getRange(i, 16).setValue(request.parameter.size1);
        sheet.getRange(i, 17).setValue(request.parameter.weight1);
    
        sheet.getRange(i, 18).setValue(request.parameter.item2);
        sheet.getRange(i, 19).setValue(request.parameter.quantity2);
        sheet.getRange(i, 20).setValue(request.parameter.price2);
        sheet.getRange(i, 21).setValue(request.parameter.color2);
        sheet.getRange(i, 22).setValue(request.parameter.size2);
        sheet.getRange(i, 23).setValue(request.parameter.weight2);
    
        sheet.getRange(i, 24).setValue(request.parameter.item3);
        sheet.getRange(i, 25).setValue(request.parameter.quantity3);
        sheet.getRange(i, 26).setValue(request.parameter.price3);
        sheet.getRange(i, 27).setValue(request.parameter.color3);
        sheet.getRange(i, 28).setValue(request.parameter.size3);
        sheet.getRange(i, 29).setValue(request.parameter.weight3);
    
        sheet.getRange(i, 30).setValue(request.parameter.item4);
        sheet.getRange(i, 31).setValue(request.parameter.quantity4);
        sheet.getRange(i, 32).setValue(request.parameter.price4);
        sheet.getRange(i, 33).setValue(request.parameter.color4);
        sheet.getRange(i, 34).setValue(request.parameter.size4);
        sheet.getRange(i, 35).setValue(request.parameter.weight4);
    
        sheet.getRange(i, 36).setValue(request.parameter.item5);
        sheet.getRange(i, 37).setValue(request.parameter.quantity5);
        sheet.getRange(i, 38).setValue(request.parameter.price5);
        sheet.getRange(i, 39).setValue(request.parameter.color5);
        sheet.getRange(i, 40).setValue(request.parameter.size5);
        sheet.getRange(i, 41).setValue(request.parameter.weight5);
        
        sheet.getRange(i, 42).setValue(request.parameter.item6);
        sheet.getRange(i, 43).setValue(request.parameter.quantity6);
        sheet.getRange(i, 44).setValue(request.parameter.price6);
        sheet.getRange(i, 45).setValue(request.parameter.color6);
        sheet.getRange(i, 46).setValue(request.parameter.size6);
        sheet.getRange(i, 47).setValue(request.parameter.weight6);
        
        sheet.getRange(i, 48).setValue(request.parameter.item7);
        sheet.getRange(i, 49).setValue(request.parameter.quantity7);
        sheet.getRange(i, 50).setValue(request.parameter.price7);
        sheet.getRange(i, 51).setValue(request.parameter.color7);
        sheet.getRange(i, 52).setValue(request.parameter.size7);
        sheet.getRange(i, 53).setValue(request.parameter.weight7);
      
      }
    }
  
    var result = "value updated successfully";
    result = JSON.stringify({ "result": result });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function delete_value(request, sheet) {
    var id = request.parameter.id;
    var flag = 0;
  
    var lr = sheet.getLastRow();
    for (var i = 1; i <= lr; i++) {
      var rid = sheet.getRange(i, 1).getValue();
      if (rid == id) {
        sheet.deleteRows(i);
        var result = "value deleted successfully";
        flag = 1;
      }
    }
    if (flag == 0)
      var result = "id not found";
  
    result = JSON.stringify({
      "result": result
    });
  
    return ContentService
      .createTextOutput(request.parameter.callback + "(" + result + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  function read_value(request, ss) {
    var output = ContentService.createTextOutput(),
      data = {};
    var sheet = "sheet1";
    data.records = readData_(ss, sheet);
    var callback = request.parameters.callback;
    if (callback === undefined) {
      output.setContent(JSON.stringify(data));
    } else {
      output.setContent(callback + "(" + JSON.stringify(data) + ")");
    }
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    return output;
  }
  
  function readData_(ss, sheetname, properties) {
    if (typeof properties == "undefined") {
      properties = getHeaderRow_(ss, sheetname);
      properties = properties.map(function (p) { return p.replace(/\s+/g, '_'); });
    }
  
    var rows = getDataRows_(ss, sheetname),
      data = [];
  
    for (var r = 0, l = rows.length; r < l; r++) {
      var row = rows[r],
        record = {};
      for (var p in properties) {
        record[properties[p]] = row[p];
      }
      data.push(record);
    }
    return data;
  }
  
  function getDataRows_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  }
  
  function getHeaderRow_(ss, sheetname) {
    var sh = ss.getSheetByName(sheetname);
    return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  }
