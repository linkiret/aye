Lampa.Platform.tv();

function listenDestroy() {
	document.removeEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.remove('destroy', listenDestroy);	
};

function startHotkeys() {
	document.addEventListener("keydown", listenHotkeys);
	Lampa.Player.listener.follow('destroy', listenDestroy);
};

function listenHotkeys(e) {

	if (Lampa.PlayerPanel.visibleStatus() === true) {
  setTimeout(Lampa.PlayerPanel.hide(), 5000);
  }
  if (e.keyCode === 406) {
  Lampa.PlayerVideo.rewind(true,80);
  }
  if (e.keyCode === 427) {
	Lampa.PlayerPlaylist.next();
  }

  if (e.keyCode === 428) {
	Lampa.PlayerPlaylist.prev();
  }

};

Lampa.Player.listener.follow('ready',startHotkeys);
