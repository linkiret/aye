Lampa.Platform.tv();
function log() {
        console.log.apply(console.log, arguments);
      }
log('Hotkeys', 'Hotkeys loaded');

function openPanel(element) {
	if ('parseFloat(Lampa.Manifest.app_version)' >= '1.7') {
		Lampa.Utils.trigger(document.querySelector(element), 'click');
	} else {
		document.querySelector(element).click();
	}
};

function listenDestroy() {
	document.removeEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.remove('destroy', listenDestroy);	
};

function startHotkeys() {
	document.addEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.follow('destroy', listenDestroy);
};

function listenHotkeys(e) {

  if (e.keyCode === 406) {
  Lampa.PlayerVideo.rewind(true,80);
  }
  if (e.keyCode === 427) {
  	Lampa.Noty.show(e.keyCode);
	openPanel('.player-panel__next.button.selector');
  }

  if (e.keyCode === 428) {
  	Lampa.Noty.show(e.keyCode);
	openPanel('.player-panel__prev.button.selector');
  }
	
  if (e.keyCode === 405) {
    if (!document.querySelector('body.selectbox--open')) {
      	openPanel('.player-panel__playlist.button.selector');
    } else {
      	history.back();
    }
  }
};

Lampa.Player.listener.follow('ready',startHotkeys);
