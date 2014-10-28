Kony-iOSNativeBarcodeScanner
============================

iOS FFI integration to support barcode scanner functionality using native camera

<b>Class</b>: BarcodeReader
<b>Framework</b>: AVFoundation.framework

Static init method: +(id)init;
  This method will be used to initialize the class.

Start camera method: -(void) startCamera:(CallBack*)callBack;
  This method will open the device camera to scan for barcode.

Use above class and method to integrate FFI using Kony studio. Once device camera is started any valid barcode found in its range, would be notified to Kony app using callback assigned to startCamera method.
If user presses “Cancel” button to cancel the barcode scanning functionality the FFI will return “(Cancelled)” string to the callback.

<b>Changes to be done on Xcode</b>

<b>Note</b>"<b>Deployment Target</b>" should have assigned value greater than 6.0

<b>Future Enhancements</b>:
Add an overlay to mark center or screen where barcode should be placed
