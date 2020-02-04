
  Pod::Spec.new do |s|
    s.name = 'GameleapCapacitorChromecast'
    s.version = '0.0.1'
    s.summary = 'A plugin which allows content to be stramed to Chromecast-enabled devices.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/gameleap/capacitor-chromecast'
    s.author = 'GameLeap, Inc.'
    s.source = { :git => 'https://github.com/gameleap/capacitor-chromecast', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end