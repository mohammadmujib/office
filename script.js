(function(){
    var script = {
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist,this.mainPlayList])",
 "verticalAlign": "top",
 "gap": 10,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Player",
 "shadow": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "contentOpaque": false,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } }
 },
 "width": "100%",
 "downloadEnabled": false,
 "overflow": "visible",
 "minWidth": 20,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_t.jpg",
 "partial": false,
 "label": "1.1",
 "id": "panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 17.68,
   "panorama": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "backwardYaw": -144.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -42.83,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": 146.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -35.08,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": 146.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 12.94,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "backwardYaw": -154.8,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 37,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "backwardYaw": -156.68,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_EDFE7FF0_E39A_7ECE_41D4_081882DA2263",
  "this.overlay_EC80241B_E39E_E172_41D5_A52FCDDFF89F",
  "this.overlay_ED79E05E_E3AA_21F2_41DF_B41C84B4B1CD",
  "this.overlay_ED3E827D_E3AE_21B6_41C9_5990CEF22977",
  "this.overlay_ED5AF753_E3AA_6FF2_41E3_DAD426782991",
  "this.overlay_F71EE3DD_E3BE_E6F6_41EA_A8B8F02931EC",
  "this.overlay_F6E40FFA_E3BE_1EB2_41E6_452BE3AB163D",
  "this.overlay_F6C8947C_E3B9_E1B6_41CA_B887EC9830CE"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E81E4011_E737_501E_41D7_4897C2C51A7B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.5,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7ACED76_E736_B002_41E0_4717E44A5256",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8382FA3_E736_B001_415E_8EB0F83DF82D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.86,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7C5AE41_E736_B07E_41DD_9ADA6440EE00",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
 "partial": false,
 "label": "4",
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.71,
   "panorama": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "backwardYaw": 21.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.14,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": -12.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.72,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": -12.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 16.82,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "backwardYaw": -131.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -154.8,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 12.94,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -152.83,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 12.94,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
  "this.overlay_F2101390_E396_E74E_41DC_C5B4BE03EAF4",
  "this.overlay_F1966D10_E3EA_234E_41E8_B8A7CF011239",
  "this.overlay_F23AFF29_E3EE_1F5E_4184_BB5885B96726",
  "this.overlay_F2524421_E3EF_E14E_41B6_E75D212FA571",
  "this.overlay_F1D11FBF_E3EA_FEB2_41E1_4CFD3F70DCF4",
  "this.overlay_F1B6DDAD_E3EA_2356_41E3_6B2D5F6904CB"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.34,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E83D4FB3_E736_B002_41BC_378E9CE6B486",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F660DEB9_E736_B00E_41E0_145EB5FCD49E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6BC2F17_E736_B002_41D9_7BF461BBE335",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.2,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8101FF1_E736_B001_41DB_A0ADC1213E34",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.5,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F79B6D95_E736_B001_41E3_D537CE4225B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8327F84_E736_B006_41D2_475A5DB9618A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 0, 1)",
   "media": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 1, 2)",
   "media": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 2, 3)",
   "media": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 3, 4)",
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 4, 0)",
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7F8CDF3_E736_B002_41EA_D300FAD6BB2E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.27,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8270FD2_E736_B003_41C1_7578A31F3404",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F616BE8A_E736_B002_41D0_8A5BD69689A3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.45,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7DBDE22_E736_B002_41E3_A42936C22B23",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6357E60_E736_B03F_41EB_E473BB5167B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_t.jpg",
 "partial": false,
 "label": "3.3",
 "id": "panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 111.5,
   "panorama": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "backwardYaw": -75.55,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -12.03,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "backwardYaw": -87.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 34.41,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "backwardYaw": -129.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 146.73,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": -42.83,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 143.6,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": -42.83,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_F2C4D09D_E39A_2176_41E9_874113AB2BC8",
  "this.overlay_F2787EFB_E39A_3EB2_41D8_1527373913F0",
  "this.overlay_F2D30274_E399_E1B6_41E7_C1E4F964D111",
  "this.overlay_F21B3088_E39E_215E_41D2_B18320106ABF",
  "this.overlay_F1AF8D81_E39A_634E_41E4_99CA537059E8",
  "this.overlay_F755BF2C_E3BA_1F56_41D4_188183BA0908"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.75,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F601CE9A_E736_B002_41B1_BD5F2B24AAEB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7E87E12_E736_B003_41E7_709293823D4A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6AE3F26_E736_B003_41D4_895904B6F387",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
 "partial": false,
 "label": "5",
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -166.24,
   "panorama": "this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
   "backwardYaw": 23.53,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -129.16,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": 34.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -131.65,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "backwardYaw": 16.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -156.68,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -162.07,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 37,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_FA8606F9_E18B_A7CB_41D6_E0A24788D81C",
  "this.overlay_F0D9F678_E3FA_21BF_416E_27DCD5C673BE",
  "this.overlay_F1282386_E396_6752_41E5_C72CE7786B92",
  "this.overlay_F160941C_E39A_6176_41E0_6FF40B6898CC",
  "this.overlay_F13C350E_E39A_2352_41D1_977590DC15F7",
  "this.overlay_F0FB522F_E396_6152_41E3_77BA36FBB21C",
  "this.overlay_F7CEAA4D_E3AA_21D6_41D1_7DCC1CDB9A60"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F64CEEF7_E736_B001_41EB_24795F17EDA1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6273E7A_E736_B002_41D7_753046A7E192",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F78D5DD4_E736_B006_41EC_6AB58E2418F9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8362F94_E736_B006_41D2_C284FB93B762",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0
  }
 ],
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "pitch": 90,
  "hfov": 165
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F670AEA9_E736_B001_41E9_AF22B85B41A0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_t.jpg",
 "partial": false,
 "label": "2.1",
 "id": "panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -75.55,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": 111.5,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.61,
   "panorama": "this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2",
   "backwardYaw": 111.5,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 21.25,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "backwardYaw": -159.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.53,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "backwardYaw": -166.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -144.66,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 17.68,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.12,
   "panorama": "this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1",
   "backwardYaw": 17.68,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_EC9F23B0_E3BA_274E_41C3_CF48C7A8A06A",
  "this.overlay_ECEE60D2_E3BE_22F2_41DD_4137F69238B8",
  "this.overlay_EC993DC1_E3BE_62CE_4150_51E2644532BC",
  "this.overlay_ED0C423A_E3B9_E1B2_4193_35CC715C1DD6",
  "this.overlay_F2749D87_E3AA_6352_41CC_3D882BE1BC7B",
  "this.overlay_F345EB01_E396_674E_41DD_4E91BB0EA6B6"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.27,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E828CFE2_E736_B002_41C3_39D4BC638BA3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.29,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7808DB4_E736_B007_41E0_6F6BA8FA5ACD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.35,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F652EED8_E736_B00F_41D2_053CBA7F66D1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 0.54
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 0.54
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F642CEE8_E736_B00E_419C_2B384B11E5A0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 3.72
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 3.72
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "progressBorderRadius": 0,
 "toolTipTextShadowColor": "#FFFFFF",
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "width": "100%",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#000000",
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingRight": 6,
 "toolTipShadowOpacity": 1,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipOpacity": 1,
 "height": "100%",
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "transitionDuration": 500,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBorderColor": "#FFFFFF",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "progressRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingBottom": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "minHeight": 50,
 "progressBottom": 0,
 "playbackBarBottom": 5,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "toolTipBackgroundColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeight": 10,
 "toolTipBorderSize": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowBlurRadius": 3
},
{
 "itemLabelFontSize": 14,
 "itemBackgroundOpacity": 0,
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737",
 "left": "32.12%",
 "itemPaddingBottom": 3,
 "width": "34.97%",
 "backgroundColorRatios": [
  0
 ],
 "rollOverItemBackgroundOpacity": 0,
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontFamily": "Arial",
 "itemLabelTextDecoration": "none",
 "itemThumbnailHeight": 75,
 "itemLabelFontStyle": "normal",
 "itemHorizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "itemBorderRadius": 0,
 "itemVerticalAlign": "middle",
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemThumbnailWidth": 75,
 "itemThumbnailScaleMode": "fit_outside",
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.24,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemPaddingRight": 3,
 "paddingBottom": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 5,
 "itemThumbnailShadow": true,
 "verticalAlign": "top",
 "gap": 10,
 "itemLabelPosition": "bottom",
 "itemLabelGap": 9,
 "paddingRight": 20,
 "class": "ThumbnailList",
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "minHeight": 20,
 "itemThumbnailShadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "rollOverItemLabelFontWeight": "normal",
 "itemOpacity": 1,
 "itemThumbnailShadowOpacity": 0.54,
 "bottom": "5.12%",
 "itemLabelFontColor": "#FFFFFF",
 "minWidth": 20,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadowHorizontalLength": 3,
 "borderSize": 0,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 50,
 "data": {
  "name": "ThumbnailList35762"
 },
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5EC3173_E397_C152_41E0_53AE48F37F8A",
   "yaw": -42.83,
   "pitch": -16.54,
   "hfov": 10.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDFE7FF0_E39A_7ECE_41D4_081882DA2263",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_E8270FD2_E736_B003_41C1_7578A31F3404); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Food and beverages"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -16.54,
   "hfov": 10.37
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1258,
      "height": 349
     }
    ]
   },
   "pitch": -14.34,
   "hfov": 32.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.77,
   "distance": 50
  }
 ],
 "id": "overlay_EC80241B_E39E_E172_41D5_A52FCDDFF89F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F63EF9B6_E396_41D2_41EB_FBAECA7D32AD)"
  }
 ],
 "data": {
  "label": "Reception with Table"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -14.34,
   "hfov": 32.97
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5EB6173_E397_C152_41E3_930E28C5F1B2",
   "yaw": 17.68,
   "pitch": -31.64,
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED79E05E_E3AA_21F2_41DF_B41C84B4B1CD",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34, this.camera_E83D4FB3_E736_B002_41BC_378E9CE6B486); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -31.64,
   "hfov": 13.06
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1140,
      "height": 351
     }
    ]
   },
   "pitch": -13.04,
   "hfov": 30.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -35.08,
   "distance": 50
  }
 ],
 "id": "overlay_ED3E827D_E3AE_21B6_41C9_5990CEF22977",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_E828CFE2_E736_B002_41C3_39D4BC638BA3); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Food & Beverages"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -13.04,
   "hfov": 30.05
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5EBD173_E397_C152_41C8_EA27D4A049ED",
   "yaw": 94.21,
   "pitch": -16.25,
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED5AF753_E3AA_6FF2_41E3_DAD426782991",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -16.25,
   "hfov": 9.12
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F72397B1_E3BB_EF4E_41E9_C5B4F125A7BA",
   "yaw": 12.94,
   "pitch": -1.84,
   "hfov": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F71EE3DD_E3BE_E6F6_41EA_A8B8F02931EC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_E8101FF1_E736_B001_41DB_A0ADC1213E34); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "hideen 4"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -1.84,
   "hfov": 0
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F723B7B1_E3BB_EF4E_41E8_01B2F88996EA",
   "yaw": 37,
   "pitch": -1.84,
   "hfov": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6E40FFA_E3BE_1EB2_41E6_452BE3AB163D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_E81E4011_E737_501E_41D7_4897C2C51A7B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "hideen 5"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -1.84,
   "hfov": 0
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 1524,
      "height": 470
     }
    ]
   },
   "pitch": -12.38,
   "hfov": 40.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -110.63,
   "distance": 50
  }
 ],
 "id": "overlay_F6C8947C_E3B9_E1B6_41CA_B887EC9830CE",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_FF8D8F43_E3AA_3FD2_41D2_A62A336BB18D)"
  }
 ],
 "data": {
  "label": "Towards Restaurant/Shops"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -12.38,
   "hfov": 40.26
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5D78183_E397_C1B2_41CC_004497534519",
   "yaw": -154.8,
   "pitch": -3.79,
   "hfov": 3.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F642CEE8_E736_B00E_419C_2B384B11E5A0); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.79,
   "hfov": 3.86
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 1233,
      "height": 597
     }
    ]
   },
   "pitch": -14.21,
   "hfov": 32.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.14,
   "distance": 50
  }
 ],
 "id": "overlay_F2101390_E396_E74E_41DC_C5B4BE03EAF4",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F670AEA9_E736_B001_41E9_AF22B85B41A0); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Food & Beverages"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_15_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": -14.21,
   "hfov": 32.35
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0A4C8D4_E39A_22F7_41E1_78F4EA01F86B",
   "yaw": -88.72,
   "pitch": -15.34,
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1966D10_E3EA_234E_41E8_B8A7CF011239",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F660DEB9_E736_B00E_41E0_145EB5FCD49E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -15.34,
   "hfov": 10.43
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 1566,
      "height": 288
     }
    ]
   },
   "pitch": -1.64,
   "hfov": 42.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.83,
   "distance": 50
  }
 ],
 "id": "overlay_F23AFF29_E3EE_1F5E_4184_BB5885B96726",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F64CEEF7_E736_B001_41EB_24795F17EDA1); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Towards Restaurant / Shops"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_17_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 16
     }
    ]
   },
   "pitch": -1.64,
   "hfov": 42.34
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5D64183_E397_C1B2_41E8_82A49E4612F9",
   "yaw": -159.71,
   "pitch": -25.94,
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2524421_E3EF_E14E_41B6_E75D212FA571",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34, this.camera_F601CE9A_E736_B002_41B1_BD5F2B24AAEB); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -25.94,
   "hfov": 10.8
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 1316,
      "height": 464
     }
    ]
   },
   "pitch": -22.81,
   "hfov": 32.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.82,
   "distance": 50
  }
 ],
 "id": "overlay_F1D11FBF_E3EA_FEB2_41E1_4CFD3F70DCF4",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_F652EED8_E736_B00F_41D2_053CBA7F66D1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Meeting / training room"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_19_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -22.81,
   "hfov": 32.81
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5D6E183_E397_C1B2_41D1_060AF82D5927",
   "yaw": 13.79,
   "pitch": -24.24,
   "hfov": 12.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1B6DDAD_E3EA_2356_41E3_6B2D5F6904CB",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_20_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -24.24,
   "hfov": 12.11
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1316,
      "height": 377
     }
    ]
   },
   "pitch": -13.85,
   "hfov": 34.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 34.41,
   "distance": 50
  }
 ],
 "id": "overlay_F2C4D09D_E39A_2176_41E9_874113AB2BC8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_F6357E60_E736_B03F_41EB_E473BB5167B0); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Meeting / training room"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 16
     }
    ]
   },
   "pitch": -13.85,
   "hfov": 34.56
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0A248D4_E39A_22F7_41E1_11A4BE969912",
   "yaw": 31.39,
   "pitch": -15.65,
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2787EFB_E39A_3EB2_41D8_1527373913F0",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -15.65,
   "hfov": 10.42
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1566,
      "height": 470
     }
    ]
   },
   "pitch": -5.57,
   "hfov": 42.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 146.73,
   "distance": 50
  }
 ],
 "id": "overlay_F2D30274_E399_E1B6_41E7_C1E4F964D111",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F6273E7A_E736_B002_41D7_753046A7E192); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Towards Restaurant / Shops"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 16
     }
    ]
   },
   "pitch": -5.57,
   "hfov": 42.16
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5E8B183_E397_C1B2_41E7_13179ACB4FD9",
   "yaw": 143.6,
   "pitch": -5.64,
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F21B3088_E39E_215E_41D2_B18320106ABF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F616BE8A_E736_B002_41D0_8A5BD69689A3); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.64,
   "hfov": 4.66
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0A538D4_E39A_22F7_41CF_CCB98FDA4147",
   "yaw": 111.5,
   "pitch": -23.62,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1AF8D81_E39A_634E_41E4_99CA537059E8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34, this.camera_F7DBDE22_E736_B002_41E3_A42936C22B23); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -23.62,
   "hfov": 9.91
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F722F7B1_E3BB_EF4E_41E2_A8C42A371773",
   "yaw": -12.03,
   "pitch": -16.23,
   "hfov": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F755BF2C_E3BA_1F56_41D4_188183BA0908",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_F7C5AE41_E736_B07E_41DD_9ADA6440EE00); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "hidden 4"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -16.23,
   "hfov": 0
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5D52183_E397_C1B2_41D7_DFECDF7FFB2E",
   "yaw": -166.24,
   "pitch": -14.8,
   "hfov": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA8606F9_E18B_A7CB_41D6_E0A24788D81C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34, this.camera_F6BC2F17_E736_B002_41D9_7BF461BBE335); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -14.8,
   "hfov": 7.18
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 322
     }
    ]
   },
   "pitch": -13.78,
   "yaw": 119.06,
   "hfov": 7.51
  }
 ],
 "id": "overlay_F0D9F678_E3FA_21BF_416E_27DCD5C673BE",
 "areas": [
  {
   "rollOver": "this.overlay_F1282386_E396_6752_41E5_C72CE7786B92.set('enabled', !this.overlay_F1282386_E396_6752_41E5_C72CE7786B92.get('enabled'))",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_F1282386_E396_6752_41E5_C72CE7786B92.set('enabled', !this.overlay_F1282386_E396_6752_41E5_C72CE7786B92.get('enabled'))"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -13.78,
   "hfov": 7.51
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 1547,
      "height": 584
     }
    ]
   },
   "pitch": -19.05,
   "yaw": 139.36,
   "hfov": 39.56
  }
 ],
 "id": "overlay_F1282386_E396_6752_41E5_C72CE7786B92",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "data": {
  "label": "dodo"
 },
 "maps": []
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 1619,
      "height": 468
     }
    ]
   },
   "pitch": -3.24,
   "hfov": 43.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -156.68,
   "distance": 50
  }
 ],
 "id": "overlay_F160941C_E39A_6176_41E0_6FF40B6898CC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_E8362F94_E736_B006_41D2_C284FB93B762); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Towards Restaurant / Shops"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_16_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 16
     }
    ]
   },
   "pitch": -3.24,
   "hfov": 43.72
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5D5F183_E397_C1B2_4199_34C7E6314F38",
   "yaw": -162.07,
   "pitch": -2.88,
   "hfov": 3.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F13C350E_E39A_2352_41D1_977590DC15F7",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_E8382FA3_E736_B001_415E_8EB0F83DF82D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.88,
   "hfov": 3.04
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F86E3CCA_E3AA_22D2_41E6_88D27AC4D065",
   "yaw": -131.65,
   "pitch": -12.7,
   "hfov": 0.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0FB522F_E396_6152_41E3_77BA36FBB21C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_E8327F84_E736_B006_41D2_475A5DB9618A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "hidden 3"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -12.7,
   "hfov": 0.03
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F86EACCA_E3AA_22D2_41D1_238504D62B80",
   "yaw": -129.16,
   "pitch": -12.71,
   "hfov": 0.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7CEAA4D_E3AA_21D6_41D1_7DCC1CDB9A60",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F6AE3F26_E736_B003_41D4_895904B6F387); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "hidden 4"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_19_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -12.71,
   "hfov": 0.03
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1411,
      "height": 377
     }
    ]
   },
   "pitch": -12.33,
   "hfov": 37.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.53,
   "distance": 50
  }
 ],
 "id": "overlay_EC9F23B0_E3BA_274E_41C3_CF48C7A8A06A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_F78D5DD4_E736_B006_41EC_6AB58E2418F9); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Meeting / training room"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 16
     }
    ]
   },
   "pitch": -12.33,
   "hfov": 37.3
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0E44B1B_E3B7_E772_41E2_364C1C970DAA",
   "yaw": 21.25,
   "pitch": -14.43,
   "hfov": 10.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECEE60D2_E3BE_22F2_41DD_4137F69238B8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_F7808DB4_E736_B007_41E0_6F6BA8FA5ACD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -14.43,
   "hfov": 10.48
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1524,
      "height": 470
     }
    ]
   },
   "pitch": -7.4,
   "hfov": 40.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.66,
   "distance": 50
  }
 ],
 "id": "overlay_EC993DC1_E3BE_62CE_4150_51E2644532BC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F7F8CDF3_E736_B002_41EA_D300FAD6BB2E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Towards Restaurant/Shops"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -7.4,
   "hfov": 40.88
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0E4CB1B_E3B7_E772_41C4_F530EED29E92",
   "yaw": -75.55,
   "pitch": -17.17,
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED0C423A_E3B9_E1B2_4193_35CC715C1DD6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F7ACED76_E736_B002_41E0_4717E44A5256); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 16
     }
    ]
   },
   "pitch": -17.17,
   "hfov": 10.34
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5E9C183_E397_C1B2_41E1_3BD2DB7413AE",
   "yaw": -148.12,
   "pitch": -7.58,
   "hfov": 4.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2749D87_E3AA_6352_41CC_3D882BE1BC7B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1, this.camera_F7E87E12_E736_B003_41E7_709293823D4A); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.58,
   "hfov": 4.27
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 1233,
      "height": 407
     }
    ]
   },
   "pitch": -15.26,
   "hfov": 32.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -72.61,
   "distance": 50
  }
 ],
 "id": "overlay_F345EB01_E396_674E_41DD_4E91BB0EA6B6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2, this.camera_F79B6D95_E736_B001_41E3_D537CE4225B0); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Food & Beverages"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -15.26,
   "hfov": 32.19
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5EC3173_E397_C152_41E0_53AE48F37F8A",
 "levels": [
  {
   "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5EB6173_E397_C152_41E3_930E28C5F1B2",
 "levels": [
  {
   "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5EBD173_E397_C152_41C8_EA27D4A049ED",
 "levels": [
  {
   "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F72397B1_E3BB_EF4E_41E9_C5B4F125A7BA",
 "levels": [
  {
   "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F723B7B1_E3BB_EF4E_41E8_01B2F88996EA",
 "levels": [
  {
   "url": "media/panorama_EF38F0F0_E396_22CE_41E4_DF6FCEE5F8F1_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5D78183_E397_C1B2_41CC_004497534519",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F0A4C8D4_E39A_22F7_41E1_78F4EA01F86B",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_16_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5D64183_E397_C1B2_41E8_82A49E4612F9",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_18_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5D6E183_E397_C1B2_41D1_060AF82D5927",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_20_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F0A248D4_E39A_22F7_41E1_11A4BE969912",
 "levels": [
  {
   "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5E8B183_E397_C1B2_41E7_13179ACB4FD9",
 "levels": [
  {
   "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F0A538D4_E39A_22F7_41CF_CCB98FDA4147",
 "levels": [
  {
   "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F722F7B1_E3BB_EF4E_41E2_A8C42A371773",
 "levels": [
  {
   "url": "media/panorama_E8E2CEEB_E396_1ED2_41E1_C4942329F1F2_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5D52183_E397_C1B2_41D7_DFECDF7FFB2E",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5D5F183_E397_C1B2_4199_34C7E6314F38",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_17_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F86E3CCA_E3AA_22D2_41E6_88D27AC4D065",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_18_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F86EACCA_E3AA_22D2_41D1_238504D62B80",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_19_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F0E44B1B_E3B7_E772_41E2_364C1C970DAA",
 "levels": [
  {
   "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F0E4CB1B_E3B7_E772_41C4_F530EED29E92",
 "levels": [
  {
   "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F5E9C183_E397_C1B2_41E1_3BD2DB7413AE",
 "levels": [
  {
   "url": "media/panorama_E8CFAA6E_E397_E1D2_41B2_81C2B1A44C34_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
}],
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player461"
 },
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
