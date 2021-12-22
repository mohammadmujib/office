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
 "paddingRight": 0,
 "gap": 10,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "minHeight": 20,
 "downloadEnabled": false,
 "layout": "absolute",
 "overflow": "visible",
 "height": "100%",
 "minWidth": 20,
 "class": "Player",
 "paddingTop": 0,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "shadow": false,
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "definitions": [{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 63.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC36D6DA_E18A_E7C8_41C0_642E36F84AD2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -153.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA75CB49_E18A_EEC8_41D1_D3D1B51D4766",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -131.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA5F0ABF_E18A_EE48_41DD_1A3D5671BCB5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 23.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FCB92897_E18A_EA58_41E3_E4DAA6349BC3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0,
   "targetStereographicFactor": 0
  }
 ],
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": 90,
  "hfov": 165
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 45.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC23172B_E18A_E648_41D8_6BE6856C226B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -56.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBC6D984_E18A_EA38_41E7_402754D61EFA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -78.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBC96952_E18A_EAD8_41CC_E6243243CB7C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 8.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA21CAA8_E18A_EE48_41D2_BA55168906C7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 17.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBF3C9B1_E18A_EA58_41E6_603685F8BACD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -131.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBF4B9CC_E18A_EDC8_41E6_743F4C6475E6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 138,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FDEE258E_E18A_FA48_41E8_7A41CE62A047",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_F21A281F_E08E_EA48_41C9_423795947F4D",
  "this.overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
  "this.overlay_F3737079_E08B_5AC8_41E0_E26FF13CA826",
  "this.overlay_F351C806_E08B_6A38_41E5_0271B9F576B9",
  "this.overlay_F22B356A_E095_7AC8_41D2_1D8A3CC7B8AA",
  "this.overlay_F302AA73_E096_AED8_41D6_6E11FBAE0A60",
  "this.overlay_F2604F54_E09D_66D8_41D9_7D8E197C51AD",
  "this.overlay_F3E210DA_E09D_7BC8_41CB_0758F5EC47B9",
  "this.overlay_F36A4B07_E0B7_6E38_41D5_3C368D9FBEF2"
 ],
 "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
 "partial": false,
 "label": "4",
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -116.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.32,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -123.4,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.32,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -156.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.54,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "distance": 1
  },
  {
   "yaw": -154.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.77,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": -157.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.77,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 137.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.77,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 129.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.77,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 52.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.69,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "distance": 1
  },
  {
   "yaw": 46.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.69,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_F385E510_E0F7_5A5D_41E8_2AE00066A3A6",
  "this.overlay_F3D80023_E0F5_5A78_41D8_54CCF3C1B3F6",
  "this.overlay_F2161A39_E0F5_AE48_41E6_6AEC1440ABEA",
  "this.overlay_F28A2EA1_E0FB_E678_41E8_F85E48DD87BD",
  "this.overlay_F30BB3E2_E0FF_7DF8_41B5_B9FEE8F2227B",
  "this.overlay_F3000BC5_E0FF_AE38_41D7_7E0759A3A03F",
  "this.overlay_F3D0D3A1_E09D_5E7B_41E5_1CD27335EFE1"
 ],
 "thumbnailUrl": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_t.jpg",
 "partial": false,
 "label": "3",
 "id": "panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 95.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -42,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "distance": 1
  },
  {
   "yaw": 101.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.06,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 143.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.06,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 142.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.06,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 97.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.06,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 48.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -116.3,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "distance": 1
  },
  {
   "yaw": 48.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.39,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 7.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBD6493C_E18A_EA48_41E7_B571E9E45C75",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -152.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA07FA56_E18A_EED8_41B0_CDD363D26EE9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -153.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBE61A05_E18A_EE38_41E7_D155F699AAA4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_F328F8B7_E09A_AA58_41D1_C2F45502D1DE",
  "this.overlay_F3CAF4D3_E097_5BDF_41E4_940F24A80143",
  "this.overlay_F354A8CA_E097_ABC8_41CA_33F2562AB3FE",
  "this.overlay_F3312F05_E08B_663B_41BF_77797F93D800",
  "this.overlay_F31FAC74_E0B5_6AD9_41E2_499DDD4EB75B",
  "this.overlay_FADFBD33_E08D_6A58_41DF_FAB2E7F50038",
  "this.overlay_FAA26624_E08A_A678_41E5_45A32B86C361",
  "this.overlay_FA929BC4_E18A_AE39_41BF_3CF41A11E8CC"
 ],
 "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
 "partial": false,
 "label": "5",
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -134.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.62,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -139.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.62,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -172.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.68,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "distance": 1
  },
  {
   "yaw": -171.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.68,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "distance": 1
  },
  {
   "yaw": -162.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.83,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": -161.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.83,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 166.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.83,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 166.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.83,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": -171.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.25,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_F269AB41_E095_EE3B_41E8_8984688AFBFD",
  "this.overlay_F2E9CDCE_E08B_A5C9_41E0_FEDFFF79B9E0",
  "this.overlay_F3BD15A0_E08D_7A78_41E7_5E83FD7C662A",
  "this.overlay_F3BF2AAF_E08D_6E48_41A9_EB397374FAA3",
  "this.overlay_F3C6AF1C_E08E_A648_41C9_2A4916CA2C9D",
  "this.overlay_F2B59D03_E0F6_AA38_41C8_4E8E9DAABCD6",
  "this.overlay_F2376075_E08A_DAD8_41D1_1ECA306C8976",
  "this.overlay_F3BC2B6D_E09B_6ECB_41D3_C6019B3F209A"
 ],
 "thumbnailUrl": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_t.jpg",
 "partial": false,
 "label": "2",
 "id": "panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -42,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.76,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -44.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.76,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": 123.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.66,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": -149.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.66,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": -146.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.66,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 110.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.66,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "distance": 1
  },
  {
   "yaw": 26.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -156.98,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "distance": 1
  },
  {
   "yaw": 29.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.42,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -160.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC98185C_E18A_EAC8_41E1_CADFB64C1B8A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_EDD9CD22_E095_6A79_4190_5C43AF60AA0B",
  "this.overlay_EECB573E_E095_A648_41D2_2C9A086FE6D1",
  "this.overlay_EF9690DE_E08A_FBC8_41E9_CE80183BA099",
  "this.overlay_F3169870_E0BA_EAD9_41D8_1D6AA7DBAE7D",
  "this.overlay_F3AE307C_E09E_FAC8_41E1_67B2BE2E29E9",
  "this.overlay_F370CD43_E095_6A38_41E3_9EBF4AC14DDD",
  "this.overlay_F4DF36E2_E095_67F8_41EB_A35C171F19EE"
 ],
 "thumbnailUrl": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_t.jpg",
 "partial": false,
 "label": "1",
 "id": "panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -18.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.69,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": -16.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.69,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "distance": 1
  },
  {
   "yaw": 19.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 123.93,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "distance": 1
  },
  {
   "yaw": 27.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.11,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "distance": 1
  },
  {
   "yaw": 26.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.2,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 161.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC1B15C9_E18A_E5CB_41D6_50183168F1F7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -152.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA0A9A3A_E18A_EE48_41CC_CF1EA3C1CC98",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -131.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBEE19EA_E18A_EDC8_41EB_A7305D6AEE83",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "camera": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "camera": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "camera": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist",
 "class": "PlayList"
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -153.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA966B94_E18A_EE58_419E_6E6AD489CAE8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -84.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC4C27CB_E18A_E5C8_41E1_0EBD198AC112",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -150.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA7F6B2C_E18A_EE48_41D2_0A7F65494358",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -153.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA994B7A_E18A_EEC8_41C1_871E3D941353",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -84.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC539780_E18A_E638_41E9_622D80ACCBE8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -160.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC6E1832_E18A_EA58_41E0_0416FF359133",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "camera": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "camera": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "camera": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -152.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA1DBA22_E18A_EE78_41C6_ADB46B805015",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 161.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC0DC645_E18A_E638_41D9_4F26E6C3B70B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -127.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA832BAD_E18A_EE48_41DC_845648D234CF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -131.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA556AE8_E18A_EFC8_41CB_FCBBAF797021",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 8.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA2BAA8B_E18A_EE48_41E5_E177260F54E1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -153.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA62DB64_E18A_EEF8_41E7_641ED239BC5B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -160.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC7DE802_E18A_EA38_41C2_4FB9DBA4B00F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -78.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBCCC96C_E18A_EAC8_41E5_25C5258711BC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 161.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC115605_E18A_E638_41D8_68C9E2C82ADF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 25.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FBF8899B_E18A_EA48_41EA_8B59F88859B9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -150.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA425B0A_E18A_EE48_41C5_63EA6B6B3575",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 161.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC3B768A_E18A_E648_41B6_124F86318D5F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -152.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FA3EAA72_E18A_EED8_41B9_350C6EC844A3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "yaw": -160.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FC88B87C_E18A_EAC8_41A5_153B4DD7079E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
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
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "toolTipPaddingRight": 6,
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#000000",
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "height": "100%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarBottom": 5,
 "minHeight": 50,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipBackgroundColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
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
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737",
 "left": "32.12%",
 "itemPaddingBottom": 3,
 "width": "34.97%",
 "itemBackgroundOpacity": 0,
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
 "class": "ThumbnailList",
 "paddingTop": 10,
 "itemThumbnailWidth": 75,
 "itemThumbnailScaleMode": "fit_outside",
 "itemPaddingLeft": 3,
 "scrollBarWidth": 10,
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "itemBackgroundColor": [],
 "itemLabelGap": 9,
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundOpacity": 0.24,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemBackgroundColorRatios": [],
 "paddingBottom": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "itemPaddingRight": 3,
 "borderRadius": 5,
 "itemThumbnailShadow": true,
 "verticalAlign": "top",
 "paddingRight": 20,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadowColor": "#000000",
 "itemLabelPosition": "bottom",
 "rollOverItemLabelFontWeight": "normal",
 "itemThumbnailShadowOpacity": 0.54,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowVerticalLength": 3,
 "itemOpacity": 1,
 "minHeight": 20,
 "itemLabelFontColor": "#FFFFFF",
 "bottom": "5.12%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "itemThumbnailBorderRadius": 50,
 "borderSize": 0,
 "itemLabelFontWeight": "normal",
 "shadow": false,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA1DBA22_E18A_EE78_41C6_ADB46B805015); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_3_0.png",
      "width": 1023,
      "class": "ImageResourceLevel",
      "height": 402
     }
    ]
   },
   "pitch": -3.03,
   "hfov": 27.63,
   "yaw": -154.11,
   "distance": 50
  }
 ],
 "id": "overlay_F21A281F_E08E_EA48_41C9_423795947F4D",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "to Restaurant shop"
 },
 "maps": [
  {
   "yaw": -154.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.03,
   "hfov": 27.63
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA0A9A3A_E18A_EE48_41CC_CF1EA3C1CC98); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F871DF6E_E0B7_E6C8_41C7_A389FD70798E",
   "yaw": -157.11,
   "pitch": -4.37,
   "hfov": 6.17,
   "distance": 100
  }
 ],
 "id": "overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -157.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.37,
   "hfov": 6.17
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FBF4B9CC_E18A_EDC8_41E6_743F4C6475E6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_5_0.png",
      "width": 1432,
      "class": "ImageResourceLevel",
      "height": 608
     }
    ]
   },
   "pitch": -22.03,
   "hfov": 35.92,
   "yaw": -116.3,
   "distance": 50
  }
 ],
 "id": "overlay_F3737079_E08B_5AC8_41E0_E26FF13CA826",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Food and beverages"
 },
 "maps": [
  {
   "yaw": -116.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_5_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.03,
   "hfov": 35.92
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FBEE19EA_E18A_EDC8_41EB_A7305D6AEE83); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8707F6E_E0B7_E6C8_41CD_3FDFBB185937",
   "yaw": -123.4,
   "pitch": -21.49,
   "hfov": 11.76,
   "distance": 100
  }
 ],
 "id": "overlay_F351C806_E08B_6A38_41E5_0271B9F576B9",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": -123.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_6_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.49,
   "hfov": 11.76
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA07FA56_E18A_EED8_41B0_CDD363D26EE9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_7_0.png",
      "width": 1607,
      "class": "ImageResourceLevel",
      "height": 778
     }
    ]
   },
   "pitch": -20.66,
   "hfov": 40.67,
   "yaw": 137.22,
   "distance": 50
  }
 ],
 "id": "overlay_F22B356A_E095_7AC8_41D2_1D8A3CC7B8AA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "reception with table"
 },
 "maps": [
  {
   "yaw": 137.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_7_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -20.66,
   "hfov": 40.67
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA3EAA72_E18A_EED8_41B9_350C6EC844A3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB06D630_E175_A659_41E0_DA6D2E4A92D4",
   "yaw": 129.16,
   "pitch": -19.09,
   "hfov": 12.87,
   "distance": 100
  }
 ],
 "id": "overlay_F302AA73_E096_AED8_41D6_6E11FBAE0A60",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "yaw": 129.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.09,
   "hfov": 12.87
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_FA2BAA8B_E18A_EE48_41E5_E177260F54E1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_9_0.png",
      "width": 1510,
      "class": "ImageResourceLevel",
      "height": 660
     }
    ]
   },
   "pitch": -35.83,
   "hfov": 33.13,
   "yaw": 52.25,
   "distance": 50
  }
 ],
 "id": "overlay_F2604F54_E09D_66D8_41D9_7D8E197C51AD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "meeting/traing room"
 },
 "maps": [
  {
   "yaw": 52.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_9_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.83,
   "hfov": 33.13
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_FA21CAA8_E18A_EE48_41D2_BA55168906C7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F870AF6F_E0B7_E6C8_41E0_7AF07E3B0E48",
   "yaw": 46.51,
   "pitch": -35.6,
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_F3E210DA_E09D_7BC8_41CB_0758F5EC47B9",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": 46.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_10_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.6,
   "hfov": 13.54
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FBE61A05_E18A_EE38_41E7_D155F699AAA4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8731F70_E0B7_E6D8_41EB_7F2169EE9620",
   "yaw": -156.98,
   "pitch": -32.55,
   "hfov": 14.66,
   "distance": 100
  }
 ],
 "id": "overlay_F36A4B07_E0B7_6E38_41D5_3C368D9FBEF2",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "yaw": -156.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_11_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.55,
   "hfov": 14.66
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_FC23172B_E18A_E648_41D8_6BE6856C226B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_4_0.png",
      "width": 1510,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ]
   },
   "pitch": -16.86,
   "hfov": 39.1,
   "yaw": 48.62,
   "distance": 50
  }
 ],
 "id": "overlay_F385E510_E0F7_5A5D_41E8_2AE00066A3A6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "meeting/traing room"
 },
 "maps": [
  {
   "yaw": 48.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_4_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.86,
   "hfov": 39.1
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_FC36D6DA_E18A_E7C8_41C0_642E36F84AD2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87FBF6B_E0B7_E6C8_41E9_3F5D8EB979FA",
   "yaw": 48.32,
   "pitch": -19.71,
   "hfov": 15.68,
   "distance": 100
  }
 ],
 "id": "overlay_F3D80023_E0F5_5A78_41D8_54CCF3C1B3F6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": 48.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.71,
   "hfov": 15.68
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC1B15C9_E18A_E5CB_41D6_50183168F1F7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_6_0.png",
      "width": 1282,
      "class": "ImageResourceLevel",
      "height": 543
     }
    ]
   },
   "pitch": -8.69,
   "hfov": 34.28,
   "yaw": 101.69,
   "distance": 50
  }
 ],
 "id": "overlay_F2161A39_E0F5_AE48_41E6_6AEC1440ABEA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "reception with table"
 },
 "maps": [
  {
   "yaw": 101.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_6_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.69,
   "hfov": 34.28
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FDEE258E_E18A_FA48_41E8_7A41CE62A047); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87E0F6C_E0B7_E6C8_41E6_28CDD90604F8",
   "yaw": 95.76,
   "pitch": -25.62,
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_F28A2EA1_E0FB_E678_41E8_F85E48DD87BD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": 95.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_7_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.62,
   "hfov": 10.88
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC115605_E18A_E638_41D8_68C9E2C82ADF); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87EFF6C_E0B7_E6C8_41D5_393351FBF7DA",
   "yaw": 143.06,
   "pitch": -5.16,
   "hfov": 5.39,
   "distance": 100
  }
 ],
 "id": "overlay_F30BB3E2_E0FF_7DF8_41B5_B9FEE8F2227B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": 143.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.16,
   "hfov": 5.39
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC0DC645_E18A_E638_41D9_4F26E6C3B70B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_9_0.png",
      "width": 1024,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ]
   },
   "pitch": -3.81,
   "hfov": 27.66,
   "yaw": 142.42,
   "distance": 50
  }
 ],
 "id": "overlay_F3000BC5_E0FF_AE38_41D7_7E0759A3A03F",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "to Restaurant shop"
 },
 "maps": [
  {
   "yaw": 142.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_9_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.81,
   "hfov": 27.66
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC3B768A_E18A_E648_41B6_124F86318D5F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8714F6D_E0B7_E6C8_41C1_8FB7DAB3DEA7",
   "yaw": 97.38,
   "pitch": -9.56,
   "hfov": 13.43,
   "distance": 100
  }
 ],
 "id": "overlay_F3D0D3A1_E09D_5E7B_41E5_1CD27335EFE1",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "yaw": 97.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.56,
   "hfov": 13.43
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FA425B0A_E18A_EE48_41C5_63EA6B6B3575); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F9B4BD7F_E097_AAC8_41D8_E857579594CF",
   "yaw": -172.42,
   "pitch": -24.08,
   "hfov": 10.9,
   "distance": 100
  }
 ],
 "id": "overlay_F328F8B7_E09A_AA58_41D1_C2F45502D1DE",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "yaw": -172.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.08,
   "hfov": 10.9
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FA5F0ABF_E18A_EE48_41DD_1A3D5671BCB5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_4_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 547
     }
    ]
   },
   "pitch": -18.91,
   "hfov": 35.11,
   "yaw": -134.39,
   "distance": 50
  }
 ],
 "id": "overlay_F3CAF4D3_E097_5BDF_41E4_940F24A80143",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Food and beverages"
 },
 "maps": [
  {
   "yaw": -134.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_4_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.91,
   "hfov": 35.11
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FA556AE8_E18A_EFC8_41CB_FCBBAF797021); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F9B48D7F_E097_AAC8_41E0_22AC10B127AD",
   "yaw": -139.47,
   "pitch": -19.38,
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_F354A8CA_E097_ABC8_41CA_33F2562AB3FE",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": -139.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.38,
   "hfov": 9.91
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA75CB49_E18A_EEC8_41D1_D3D1B51D4766); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8728F72_E0B7_E6D8_41A6_0FB2D5882521",
   "yaw": -162.2,
   "pitch": -3.06,
   "hfov": 2.86,
   "distance": 100
  }
 ],
 "id": "overlay_F3312F05_E08B_663B_41BF_77797F93D800",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -162.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.06,
   "hfov": 2.86
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA62DB64_E18A_EEF8_41E7_641ED239BC5B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_8_0.png",
      "width": 576,
      "class": "ImageResourceLevel",
      "height": 288
     }
    ]
   },
   "pitch": -2.64,
   "hfov": 15.58,
   "yaw": -161.07,
   "distance": 50
  }
 ],
 "id": "overlay_F31FAC74_E0B5_6AD9_41E2_499DDD4EB75B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "to Restaurant shop"
 },
 "maps": [
  {
   "yaw": -161.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_8_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.64,
   "hfov": 15.58
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA994B7A_E18A_EEC8_41C1_871E3D941353); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB070634_E175_A659_41BC_1CA367BC2162",
   "yaw": 166.83,
   "pitch": -11.83,
   "hfov": 13.33,
   "distance": 100
  }
 ],
 "id": "overlay_FADFBD33_E08D_6A58_41DF_FAB2E7F50038",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "yaw": 166.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.83,
   "hfov": 13.33
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FA966B94_E18A_EE58_419E_6E6AD489CAE8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_10_0.png",
      "width": 1607,
      "class": "ImageResourceLevel",
      "height": 778
     }
    ]
   },
   "pitch": -13.39,
   "hfov": 42.29,
   "yaw": 166.28,
   "distance": 50
  }
 ],
 "id": "overlay_FAA26624_E08A_A678_41E5_45A32B86C361",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "reception with table"
 },
 "maps": [
  {
   "yaw": 166.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_10_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -13.39,
   "hfov": 42.29
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_FA832BAD_E18A_EE48_41DC_845648D234CF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FDC46521_E18A_FA78_41D9_C55712E80CA9",
   "yaw": -171.69,
   "pitch": -47.08,
   "hfov": 6.68,
   "distance": 100
  }
 ],
 "id": "overlay_FA929BC4_E18A_AE39_41BF_3CF41A11E8CC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "yaw": -171.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_11_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.08,
   "hfov": 6.68
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC7DE802_E18A_EA38_41C2_4FB9DBA4B00F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_4_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 654
     }
    ]
   },
   "pitch": -18.84,
   "hfov": 54.31,
   "yaw": 123.93,
   "distance": 50
  }
 ],
 "id": "overlay_F269AB41_E095_EE3B_41E8_8984688AFBFD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "reception with table"
 },
 "maps": [
  {
   "yaw": 123.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_4_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.84,
   "hfov": 54.31
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FC539780_E18A_E638_41E9_622D80ACCBE8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_5_0.png",
      "width": 1389,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ]
   },
   "pitch": -30.04,
   "hfov": 32.52,
   "yaw": -42,
   "distance": 50
  }
 ],
 "id": "overlay_F2E9CDCE_E08B_A5C9_41E0_FEDFFF79B9E0",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Food and beverages"
 },
 "maps": [
  {
   "yaw": -42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_5_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.04,
   "hfov": 32.52
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FC4C27CB_E18A_E5C8_41E1_0EBD198AC112); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87C7F68_E0B7_E6C8_41E5_668CF20367E9",
   "yaw": -44.86,
   "pitch": -33.75,
   "hfov": 10.51,
   "distance": 100
  }
 ],
 "id": "overlay_F3BD15A0_E08D_7A78_41E7_5E83FD7C662A",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": -44.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_6_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.75,
   "hfov": 10.51
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_FBD6493C_E18A_EA48_41E7_B571E9E45C75); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_7_0.png",
      "width": 1285,
      "class": "ImageResourceLevel",
      "height": 329
     }
    ]
   },
   "pitch": -15.49,
   "hfov": 33.49,
   "yaw": 29.68,
   "distance": 50
  }
 ],
 "id": "overlay_F3BF2AAF_E08D_6E48_41A9_EB397374FAA3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "meeting/traing room"
 },
 "maps": [
  {
   "yaw": 29.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_7_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.49,
   "hfov": 33.49
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_FCB92897_E18A_EA58_41E3_E4DAA6349BC3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87CFF69_E0B7_E6C8_41D7_F32AD32EC1F0",
   "yaw": 26.54,
   "pitch": -18.37,
   "hfov": 15.81,
   "distance": 100
  }
 ],
 "id": "overlay_F3C6AF1C_E08E_A648_41C9_2A4916CA2C9D",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": 26.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_8_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.37,
   "hfov": 15.81
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC6E1832_E18A_EA58_41E0_0416FF359133); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87CBF6A_E0B7_E6C8_41E6_18E1756DF9BF",
   "yaw": -149.93,
   "pitch": -7.19,
   "hfov": 7.76,
   "distance": 100
  }
 ],
 "id": "overlay_F2B59D03_E0F6_AA38_41C8_4E8E9DAABCD6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -149.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.19,
   "hfov": 7.76
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC98185C_E18A_EAC8_41E1_CADFB64C1B8A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_10_0.png",
      "width": 1204,
      "class": "ImageResourceLevel",
      "height": 593
     }
    ]
   },
   "pitch": -6.37,
   "hfov": 32.37,
   "yaw": -146.15,
   "distance": 50
  }
 ],
 "id": "overlay_F2376075_E08A_DAD8_41D1_1ECA306C8976",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "to Restaurant shop"
 },
 "maps": [
  {
   "yaw": -146.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_10_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.37,
   "hfov": 32.37
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_FC88B87C_E18A_EAC8_41A5_153B4DD7079E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87F2F6A_E0B7_E6C8_41C3_17F375C69D1C",
   "yaw": 110.09,
   "pitch": -18.64,
   "hfov": 12.91,
   "distance": 100
  }
 ],
 "id": "overlay_F3BC2B6D_E09B_6ECB_41D3_C6019B3F209A",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "yaw": 110.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.64,
   "hfov": 12.91
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FBC96952_E18A_EAD8_41CC_E6243243CB7C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F2E68277_E097_BED8_41C9_B4A6A6EC6F69",
   "yaw": -18.06,
   "pitch": -27.4,
   "hfov": 11.22,
   "distance": 100
  }
 ],
 "id": "overlay_EDD9CD22_E095_6A79_4190_5C43AF60AA0B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": -18.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.4,
   "hfov": 11.22
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_FBF8899B_E18A_EA48_41EA_8B59F88859B9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87BAF63_E0B7_E6F8_41D7_AF40824BD63B",
   "yaw": 27.77,
   "pitch": -16.76,
   "hfov": 8.34,
   "distance": 100
  }
 ],
 "id": "overlay_EECB573E_E095_A648_41D2_2C9A086FE6D1",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "yaw": 27.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.76,
   "hfov": 8.34
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_FBF3C9B1_E18A_EA58_41E6_603685F8BACD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_7_0.png",
      "width": 1005,
      "class": "ImageResourceLevel",
      "height": 343
     }
    ]
   },
   "pitch": -15.69,
   "hfov": 26.2,
   "yaw": 26.83,
   "distance": 50
  }
 ],
 "id": "overlay_EF9690DE_E08A_FBC8_41E9_CE80183BA099",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "meeting/traing room"
 },
 "maps": [
  {
   "yaw": 26.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_7_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.69,
   "hfov": 26.2
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_FBCCC96C_E18A_EAC8_41E5_25C5258711BC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_10_0.png",
      "width": 1172,
      "class": "ImageResourceLevel",
      "height": 392
     }
    ]
   },
   "pitch": -26.15,
   "hfov": 28.47,
   "yaw": -16.75,
   "distance": 50
  }
 ],
 "id": "overlay_F3169870_E0BA_EAD9_41D8_1D6AA7DBAE7D",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Food and beverages"
 },
 "maps": [
  {
   "yaw": -16.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_10_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -26.15,
   "hfov": 28.47
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FBC6D984_E18A_EA38_41E7_402754D61EFA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87ACF64_E0B7_E6F8_41C5_E714B59EA829",
   "yaw": 19.66,
   "pitch": -26.36,
   "hfov": 10.7,
   "distance": 100
  }
 ],
 "id": "overlay_F3AE307C_E09E_FAC8_41E1_67B2BE2E29E9",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "yaw": 19.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.36,
   "hfov": 10.7
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_13_0.png",
      "width": 1616,
      "class": "ImageResourceLevel",
      "height": 616
     }
    ]
   },
   "pitch": -15.73,
   "hfov": 42.08,
   "yaw": 82.31,
   "distance": 50
  }
 ],
 "id": "overlay_F370CD43_E095_6A38_41E3_9EBF4AC14DDD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "reception with table"
 },
 "maps": [
  {
   "yaw": 82.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_13_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.73,
   "hfov": 42.08
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F87DDF67_E0B7_E6F8_41C4_32705287E4AD",
   "yaw": 68.48,
   "pitch": -16.51,
   "hfov": 15.1,
   "distance": 100
  }
 ],
 "id": "overlay_F4DF36E2_E095_67F8_41EB_A35C171F19EE",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "yaw": 68.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.51,
   "hfov": 15.1
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F871DF6E_E0B7_E6C8_41C7_A389FD70798E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F8707F6E_E0B7_E6C8_41CD_3FDFBB185937",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FB06D630_E175_A659_41E0_DA6D2E4A92D4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_8_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 40,
 "id": "AnimatedImageResource_F870AF6F_E0B7_E6C8_41E0_7AF07E3B0E48",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F8731F70_E0B7_E6D8_41EB_7F2169EE9620",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 40,
 "id": "AnimatedImageResource_F87FBF6B_E0B7_E6C8_41E9_3F5D8EB979FA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87E0F6C_E0B7_E6C8_41E6_28CDD90604F8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87EFF6C_E0B7_E6C8_41D5_393351FBF7DA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F8714F6D_E0B7_E6C8_41C1_8FB7DAB3DEA7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_10_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F9B4BD7F_E097_AAC8_41D8_E857579594CF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F9B48D7F_E097_AAC8_41E0_22AC10B127AD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F8728F72_E0B7_E6D8_41A6_0FB2D5882521",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FB070634_E175_A659_41BC_1CA367BC2162",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_9_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FDC46521_E18A_FA78_41D9_C55712E80CA9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87C7F68_E0B7_E6C8_41E5_668CF20367E9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 40,
 "id": "AnimatedImageResource_F87CFF69_E0B7_E6C8_41D7_F32AD32EC1F0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87CBF6A_E0B7_E6C8_41E6_18E1756DF9BF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87F2F6A_E0B7_E6C8_41C3_17F375C69D1C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_11_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2E68277_E097_BED8_41C9_B4A6A6EC6F69",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 40,
 "id": "AnimatedImageResource_F87BAF63_E0B7_E6F8_41D7_AF40824BD63B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87ACF64_E0B7_E6F8_41C5_E714B59EA829",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F87DDF67_E0B7_E6F8_41C4_32705287E4AD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_16_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ]
}],
 "data": {
  "name": "Player461"
 },
 "defaultVRPointer": "laser",
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
