
function GO_AR(){
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;



	if (/android/i.test(userAgent)) {
		
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		location.href="https://raw.githubusercontent.com/vladjiss/gltf-models/master/rr_usdz.html"
	}
	else {
		location.href="intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/vladjiss/gltf-models/master/RangeRover3.glb&mode=ar_preferred#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;";
	}


}