package com.healer;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactPackage;
import com.horcrux.svg.SvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.wheelpicker.WheelPickerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    // Add the packages you require here.
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new WheelPickerPackage(),
      new VectorIconsPackage(),
      new SvgPackage(),
      new LinearGradientPackage()
    );
  }
}
