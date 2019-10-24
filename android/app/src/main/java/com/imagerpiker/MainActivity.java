package com.imagerpiker;

import com.facebook.react.ReactActivity;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {
    private PermissionListener listener; // <- add this attribute

  // Your methods here

  // Copy from here

  
  public void setPermissionListener(PermissionListener listener)
  {
    this.listener = listener;
  }

  
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
  {
    if (listener != null)
    {
      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }

  
  protected String getMainComponentName() {
    return "imagerpiker";
  }
}
