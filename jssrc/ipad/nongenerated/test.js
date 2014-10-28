function readBarcodeDataUsingiOSNativeCamera() {
    try {
        kony.print("Inside readBarcodeDataUsingiOSNativeCamera");
        //Creates an object of class 'ReadBarcode'
        var ReadBarcodeObject = new com.kony.barcode.iosnativecamera.ReadBarcode();
        //Invokes method 'readNativeBarcodeData' on the object
        ReadBarcodeObject.readNativeBarcodeData(scannerBarcodeCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening iOS native camera");
    }
}

function scannerBarcodeCallback(data) {
    try {
        kony.print("Barcode data: " + data);
        if (data != undefined && data != null && data.length > 0) {
            if (data == "(Cancelled)") {
                kony.print("User has cancelled barcode scanning. " + data);
                frm01.lblBarcodeData.text = "User has cancelled the barcode scanning.";
                return;
            } else {
                frm01.lblBarcodeData.text = "Scanned barcode value : " + data;
            }
        }
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening iOS native camera");
    }
}