(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist,this.mainPlayList])",
 "layout": "absolute",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "contentOpaque": false,
 "width": "100%",
 "class": "Player",
 "defaultVRPointer": "laser",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737"
 ],
 "paddingRight": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": -105.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EEC797ED_E174_12FB_41D0_9D877E13239B",
 "initialSequence": "this.sequence_EEC7E7EE_E174_12F8_419F_59DD2263EB2F",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -133.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F155B90D_E174_1F38_41B1_C2D76D251E39",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 3.72
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "label": "4",
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 31.94,
   "yaw": -154.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": 31.94,
   "yaw": -157.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_F21A281F_E08E_EA48_41C9_423795947F4D",
  "this.overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
  "this.overlay_F3737079_E08B_5AC8_41E0_E26FF13CA826",
  "this.overlay_F2604F54_E09D_66D8_41D9_7D8E197C51AD",
  "this.overlay_FD6869F5_E1B7_6DDB_41E8_504782724149",
  "this.overlay_FA4703D0_E1B7_5DD9_41E9_95958272B142",
  "this.overlay_FACA09F7_E1B7_ADC7_4191_EE00EB95B0B5"
 ],
 "thumbnailUrl": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 10.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EEB15830_E174_1D68_41E6_604175DADE59",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -62.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EE9D086A_E174_1DF8_41CF_66C763A8E1ED",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 3.72
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 138.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F135A950_E174_1F28_41DA_FCCDEA5D22DC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 3.72
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -72.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EEA86853_E174_1D28_41DC_5E311F391576",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -129.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F14F3923_E174_1F68_41DF_4BA136FAEB6A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 25.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EE89B89E_E174_1D58_41E9_A184CCBF3DAD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "label": "2",
 "id": "panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 74.59,
   "yaw": 117.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": 74.59,
   "yaw": -149.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": 74.59,
   "yaw": -146.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": -169.67,
   "yaw": 46.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701"
  },
  {
   "backwardYaw": 107.27,
   "yaw": -41.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_F269AB41_E095_EE3B_41E8_8984688AFBFD",
  "this.overlay_F2E9CDCE_E08B_A5C9_41E0_FEDFFF79B9E0",
  "this.overlay_F3BF2AAF_E08D_6E48_41A9_EB397374FAA3",
  "this.overlay_F2B59D03_E0F6_AA38_41C8_4E8E9DAABCD6",
  "this.overlay_F2376075_E08A_DAD8_41D1_1ECA306C8976",
  "this.overlay_FABECF39_E1BB_6648_41E2_E18B4F7299A5",
  "this.overlay_FA97A8A2_E1BB_6A78_41E4_A51E53190F9C",
  "this.overlay_FABF11D4_E1BD_5DD8_41D0_C6EBC9D2381C"
 ],
 "thumbnailUrl": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -148.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F16ED8E0_E174_1EE8_41C9_C8DAEA3B6DDF",
 "initialSequence": "this.sequence_F16928E0_E174_1EE8_41C8_C9051E9D22E0",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 159.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F11C197D_E174_1FD8_41D5_3BB83A19B3C0",
 "initialSequence": "this.sequence_F11C697D_E174_1FD8_41D0_D4B57145BBCD",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 0, 1)",
   "media": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 1, 2)",
   "media": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 2, 3)",
   "media": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 3, 4)",
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist, 4, 0)",
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera"
  }
 ],
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist",
 "class": "PlayList"
},
{
 "mouseControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -105.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EEBD4802_E174_1D29_41C5_DD5BBB53779C",
 "initialSequence": "this.sequence_EEBD5803_E174_1D28_41E7_15228EC1CC72",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "label": "3",
 "id": "panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -41.52,
   "yaw": 107.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1"
  },
  {
   "backwardYaw": -20.71,
   "yaw": 143.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": -20.71,
   "yaw": 142.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD"
  },
  {
   "backwardYaw": -134.39,
   "yaw": 50.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701"
  },
  {
   "backwardYaw": -134.39,
   "yaw": 49.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_F30BB3E2_E0FF_7DF8_41B5_B9FEE8F2227B",
  "this.overlay_F3000BC5_E0FF_AE38_41D7_7E0759A3A03F",
  "this.overlay_F385E510_E0F7_5A5D_41E8_2AE00066A3A6",
  "this.overlay_FAA8FE49_E1BA_A6C8_41A1_54A12BC1FBE6",
  "this.overlay_FD58DD77_E1BB_AAD8_41E3_39ED93873C2D"
 ],
 "thumbnailUrl": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 159.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F1292967_E174_1FE8_41AD_6BBB0CC0A287",
 "initialSequence": "this.sequence_F1293967_E174_1FE8_41D3_B7A9D0D6F8DD",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -36.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F17428CA_E174_1D38_41EA_05139227E8AE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "media": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "label": "5",
 "id": "panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 46.61,
   "yaw": -169.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1"
  },
  {
   "backwardYaw": 50.87,
   "yaw": -134.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E"
  },
  {
   "backwardYaw": 50.87,
   "yaw": -138.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_F3CAF4D3_E097_5BDF_41E4_940F24A80143",
  "this.overlay_FA8606F9_E18B_A7CB_41D6_E0A24788D81C",
  "this.overlay_FD77EDFF_E18B_A5C8_41E6_CFC470AFBFBD"
 ],
 "thumbnailUrl": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 3.72
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -129.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F1400939_E174_1F58_41E7_80F3E9EAF89D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 45.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F111E993_E174_1F28_41E6_B02B0642A311",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -62.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EE949885_E174_1D28_41E1_9476674E6E4C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 3.72
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 3.72
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "duration": 3000
  }
 ],
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_camera",
 "initialSequence": "this.sequence_FACE596A_E18F_AAC8_41DC_8CABB21B6797",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "pitch": 90,
  "stereographicFactor": 1
 }
},
{
 "initialPosition": {
  "yaw": 45.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F10499A7_E174_1F68_41E0_A35B8242272B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -105.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EEB83818_E174_1D58_41DA_40DD439C5D1E",
 "initialSequence": "this.sequence_EEB80819_E174_1D58_41DF_E5E6D8C04827",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -36.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EE8288B4_E174_1D68_41EB_E6A5113300FC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.54
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.54
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "initialPosition": {
  "yaw": -148.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F160A8F6_E174_1EE8_41E5_BD479036F2A3",
 "initialSequence": "this.sequence_F16088F6_E174_1EE8_41D5_BC62723BEF6A",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "label": "1",
 "id": "panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.58,
   "yaw": 74.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1"
  },
  {
   "backwardYaw": 117.58,
   "yaw": 19.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1"
  },
  {
   "backwardYaw": -154.11,
   "yaw": 31.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87"
  },
  {
   "panorama": "this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 143.06,
   "yaw": -20.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E"
  },
  {
   "backwardYaw": 143.06,
   "yaw": -22.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_EF9690DE_E08A_FBC8_41E9_CE80183BA099",
  "this.overlay_F3169870_E0BA_EAD9_41D8_1D6AA7DBAE7D",
  "this.overlay_F3AE307C_E09E_FAC8_41E1_67B2BE2E29E9",
  "this.overlay_F370CD43_E095_6A38_41E3_9EBF4AC14DDD",
  "this.overlay_FA958DBC_E18A_EA49_41DA_084EBEC9A943",
  "this.overlay_FAA00828_E18A_EA49_41C8_4094769ECE34",
  "this.overlay_FD4C1653_E1B5_A6D8_41E3_B3348F227C70"
 ],
 "thumbnailUrl": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowOpacity": 1,
 "transitionDuration": 500,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "toolTipTextShadowColor": "#FFFFFF",
 "width": "100%",
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionMode": "blending",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "borderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "progressRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "progressOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipShadowColor": "#333333",
 "toolTipTextShadowOpacity": 0,
 "progressBackgroundOpacity": 1,
 "progressBorderColor": "#000000",
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#FFFFFF",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minHeight": 50,
 "progressLeft": 0,
 "paddingRight": 0,
 "toolTipFontFamily": "Arial",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "playbackBarHeight": 10,
 "borderRadius": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderColor": "#000000",
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1
},
{
 "paddingBottom": 10,
 "id": "ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737",
 "left": "32.12%",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingLeft": 20,
 "width": "34.97%",
 "itemThumbnailWidth": 75,
 "class": "ThumbnailList",
 "verticalAlign": "top",
 "itemPaddingLeft": 3,
 "shadow": false,
 "scrollBarWidth": 10,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelPosition": "bottom",
 "borderSize": 0,
 "itemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowColor": "#000000",
 "itemLabelGap": 9,
 "itemThumbnailShadowOpacity": 0.54,
 "rollOverItemLabelFontWeight": "normal",
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorRatios": [],
 "itemOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "layout": "horizontal",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 50,
 "itemMode": "normal",
 "playList": "this.ThumbnailList_F153F6B9_E097_6648_41C3_B29EF9C3C737_playlist",
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowVerticalLength": 3,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowBlurRadius": 8,
 "minHeight": 20,
 "bottom": "5.12%",
 "itemLabelFontSize": 14,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "minWidth": 20,
 "itemBackgroundOpacity": 0,
 "itemLabelTextDecoration": "none",
 "propagateClick": false,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundOpacity": 0.24,
 "itemLabelFontFamily": "Arial",
 "scrollBarColor": "#FFFFFF",
 "borderRadius": 5,
 "itemLabelFontStyle": "normal",
 "itemBorderRadius": 0,
 "horizontalAlign": "left",
 "itemThumbnailHeight": 75,
 "data": {
  "name": "ThumbnailList35762"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "itemLabelHorizontalAlign": "center",
 "itemVerticalAlign": "middle"
},
{
 "id": "sequence_EEC7E7EE_E174_12F8_419F_59DD2263EB2F",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.63,
   "yaw": -154.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -3.03,
   "yaw": -154.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_3_0.png",
      "width": 1023,
      "class": "ImageResourceLevel",
      "height": 402
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.63,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_F16ED8E0_E174_1EE8_41C9_C8DAEA3B6DDF); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F21A281F_E08E_EA48_41C9_423795947F4D",
 "data": {
  "label": "to Restaurant shop"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.17,
   "yaw": -157.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F871DF6E_E0B7_E6C8_41C7_A389FD70798E",
   "pitch": -4.37,
   "yaw": -157.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_F160A8F6_E174_1EE8_41E5_BD479036F2A3); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F38E30DB_E08F_DBC8_41DF_4A9E1AE1CD81",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.92,
   "yaw": -116.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_5_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -22.03,
   "yaw": -116.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_5_0.png",
      "width": 1432,
      "class": "ImageResourceLevel",
      "height": 608
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.92,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3737079_E08B_5AC8_41E0_E26FF13CA826",
 "data": {
  "label": "Food and beverages"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.55,
   "yaw": 52.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_9_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -31.42,
   "yaw": 52.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_9_0.png",
      "width": 1540,
      "class": "ImageResourceLevel",
      "height": 334
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.55,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2604F54_E09D_66D8_41D9_7D8E197C51AD",
 "data": {
  "label": "meeting/training room"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -157.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA105BD7_E18B_ADD8_41D9_7FB73C3BA405",
   "pitch": -29.09,
   "yaw": -157.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FD6869F5_E1B7_6DDB_41E8_504782724149",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.12,
   "yaw": -121.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_13_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA102BD8_E18B_ADC8_41EB_C1397E025912",
   "pitch": -21.37,
   "yaw": -121.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.12,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FA4703D0_E1B7_5DD9_41E9_95958272B142",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.86,
   "yaw": 49.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_14_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9D3C93_E17C_3528_41E6_88B505D2C059",
   "pitch": -34.35,
   "yaw": 49.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.86,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FACA09F7_E1B7_ADC7_4191_EE00EB95B0B5",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.27,
   "yaw": 117.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_4_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -25.33,
   "yaw": 117.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_4_0.png",
      "width": 1483,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 36.27,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_EEC797ED_E174_12FB_41D0_9D877E13239B); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F269AB41_E095_EE3B_41E8_8984688AFBFD",
 "data": {
  "label": "reception with table"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.46,
   "yaw": -41.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_5_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -30.51,
   "yaw": -41.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_5_0.png",
      "width": 1393,
      "class": "ImageResourceLevel",
      "height": 399
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.46,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_EEA86853_E174_1D28_41DC_5E311F391576); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2E9CDCE_E08B_A5C9_41E0_FEDFFF79B9E0",
 "data": {
  "label": "Food & beverages"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 43.24,
   "yaw": 46.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_7_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -13.22,
   "yaw": 46.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_7_0.png",
      "width": 1642,
      "class": "ImageResourceLevel",
      "height": 462
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.24,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_EEB15830_E174_1D68_41E6_604175DADE59); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3BF2AAF_E08D_6E48_41A9_EB397374FAA3",
 "data": {
  "label": "meeting/training room"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": -149.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F87CBF6A_E0B7_E6C8_41E6_18E1756DF9BF",
   "pitch": -7.19,
   "yaw": -149.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.76,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_EEBD4802_E174_1D29_41C5_DD5BBB53779C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2B59D03_E0F6_AA38_41C8_4E8E9DAABCD6",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.37,
   "yaw": -146.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_10_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -6.37,
   "yaw": -146.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_10_0.png",
      "width": 1204,
      "class": "ImageResourceLevel",
      "height": 593
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.37,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_EEB83818_E174_1D58_41DA_40DD439C5D1E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2376075_E08A_DAD8_41D1_1ECA306C8976",
 "data": {
  "label": "to Restaurant shop"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": -43.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA12FBCF_E18B_ADC8_41BA_813DCA93D0F9",
   "pitch": -33.73,
   "yaw": -43.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.19,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FD11F580_E18F_DA38_41E6_DF679CCD5A76)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FABECF39_E1BB_6648_41E2_E18B4F7299A5",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.48,
   "yaw": 40.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_13_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9C1C93_E17C_3528_41DD_8BBAEDAF08C0",
   "pitch": -15.88,
   "yaw": 40.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.48,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FD11F580_E18F_DA38_41E6_DF679CCD5A76)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FA97A8A2_E1BB_6A78_41E4_A51E53190F9C",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.52,
   "yaw": 114.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_14_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA129BD0_E18B_ADD8_41E6_405174739FF2",
   "pitch": -28.18,
   "yaw": 114.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.52,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_FD11F580_E18F_DA38_41E6_DF679CCD5A76)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FABF11D4_E1BD_5DD8_41D0_C6EBC9D2381C",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "id": "sequence_F16928E0_E174_1EE8_41C8_C9051E9D22E0",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "id": "sequence_F11C697D_E174_1FD8_41D0_D4B57145BBCD",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "id": "sequence_EEBD5803_E174_1D28_41E7_15228EC1CC72",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 143.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F87EFF6C_E0B7_E6C8_41D5_393351FBF7DA",
   "pitch": -5.16,
   "yaw": 143.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.39,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_F1292967_E174_1FE8_41AD_6BBB0CC0A287); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F30BB3E2_E0FF_7DF8_41B5_B9FEE8F2227B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.66,
   "yaw": 142.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_9_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -3.81,
   "yaw": 142.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_9_0.png",
      "width": 1024,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.66,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD, this.camera_F11C197D_E174_1FD8_41D5_3BB83A19B3C0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3000BC5_E0FF_AE38_41D7_7E0759A3A03F",
 "data": {
  "label": "to Restaurant shop"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.93,
   "yaw": 50.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_4_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -11.92,
   "yaw": 50.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_4_0.png",
      "width": 1509,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 39.93,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_F111E993_E174_1F28_41E6_B02B0642A311); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F385E510_E0F7_5A5D_41E8_2AE00066A3A6",
 "data": {
  "label": "meeting/training room"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.58,
   "yaw": 49.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_11_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9CEC93_E17C_3528_41B4_F6CE20DEB89B",
   "pitch": -14.16,
   "yaw": 49.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.58,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701, this.camera_F10499A7_E174_1F68_41E0_A35B8242272B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FAA8FE49_E1BA_A6C8_41A1_54A12BC1FBE6",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 107.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA110BD4_E18B_ADD8_41E8_DF2559028311",
   "pitch": -25,
   "yaw": 107.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.82,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_F135A950_E174_1F28_41DA_FCCDEA5D22DC); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FD58DD77_E1BB_AAD8_41E3_39ED93873C2D",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "id": "sequence_F1293967_E174_1FE8_41D3_B7A9D0D6F8DD",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.11,
   "yaw": -134.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_4_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -18.91,
   "yaw": -134.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_4_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 547
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.11,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_F14F3923_E174_1F68_41DF_4BA136FAEB6A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3CAF4D3_E097_5BDF_41E4_940F24A80143",
 "data": {
  "label": "Food and beverages"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": -169.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA10ABDB_E18B_ADC8_41E5_462B56064E8D",
   "pitch": -30,
   "yaw": -169.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.34,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_F155B90D_E174_1F38_41B1_C2D76D251E39); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FA8606F9_E18B_A7CB_41D6_E0A24788D81C",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.25,
   "yaw": -138.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_13_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FAEF7BDC_E18B_ADC8_41BF_C5BD40C7F4AE",
   "pitch": -19.55,
   "yaw": -138.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.25,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_F1400939_E174_1F58_41E7_80F3E9EAF89D); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FD77EDFF_E18B_A5C8_41E6_CFC470AFBFBD",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "id": "sequence_FACE596A_E18F_AAC8_41DC_8CABB21B6797",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "id": "sequence_EEB80819_E174_1D58_41DF_E5E6D8C04827",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "id": "sequence_F16088F6_E174_1EE8_41D5_BC62723BEF6A",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 3.72
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.31,
   "yaw": 34.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_7_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -8.4,
   "yaw": 34.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_7_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.31,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF9690DE_E08A_FBC8_41E9_CE80183BA099",
 "data": {
  "label": "meeting/traing room"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.36,
   "yaw": -20.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_10_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -22.22,
   "yaw": -20.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_10_0.png",
      "width": 1172,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.36,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_EE8288B4_E174_1D68_41EB_E6A5113300FC); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3169870_E0BA_EAD9_41D8_1D6AA7DBAE7D",
 "data": {
  "label": "Food and beverages"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 74.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_12_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9F5C93_E17C_3528_41E9_B3DB76BB53F1",
   "pitch": -25,
   "yaw": 74.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.82,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_EE9D086A_E174_1DF8_41CF_66C763A8E1ED); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3AE307C_E09E_FAC8_41E1_67B2BE2E29E9",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.91,
   "yaw": 76.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_13_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "pitch": -22.42,
   "yaw": 76.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_13_0.png",
      "width": 1236,
      "class": "ImageResourceLevel",
      "height": 340
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.91,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F370CD43_E095_6A38_41E3_9EBF4AC14DDD",
 "data": {
  "label": "reception with table"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.3,
   "yaw": 31.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_17_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9F3C93_E17C_3528_41D7_2E6DFEFAEB06",
   "pitch": -10.95,
   "yaw": 31.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.3,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87, this.camera_EE89B89E_E174_1D58_41E9_A184CCBF3DAD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FA958DBC_E18A_EA49_41DA_084EBEC9A943",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.88,
   "yaw": -22.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_18_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EF9FDC93_E17C_3528_41D0_5FD1A365C12D",
   "pitch": -24.37,
   "yaw": -22.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E, this.camera_F17428CA_E174_1D38_41EA_05139227E8AE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FAA00828_E18A_EA49_41C8_4094769ECE34",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.7,
   "yaw": 19.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_19_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FA13CBCD_E18B_ADC8_41E3_DEB530E2AD9B",
   "pitch": -26.36,
   "yaw": 19.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.7,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1, this.camera_EE949885_E174_1D28_41E1_9476674E6E4C); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FD4C1653_E1B5_A6D8_41E3_B3348F227C70",
 "data": {
  "label": "Circle 02c"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F871DF6E_E0B7_E6C8_41C7_A389FD70798E",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA105BD7_E18B_ADD8_41D9_7FB73C3BA405",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA102BD8_E18B_ADC8_41EB_C1397E025912",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FC8FD7_DCAD_3902_41E7_1686552A4B87_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9D3C93_E17C_3528_41E6_88B505D2C059",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F87CBF6A_E0B7_E6C8_41E6_18E1756DF9BF",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA12FBCF_E18B_ADC8_41BA_813DCA93D0F9",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9C1C93_E17C_3528_41DD_8BBAEDAF08C0",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6902B78_DCAD_590E_41D4_5ACBA2B12CE1_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA129BD0_E18B_ADD8_41E6_405174739FF2",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F87EFF6C_E0B7_E6C8_41D5_393351FBF7DA",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9CEC93_E17C_3528_41B4_F6CE20DEB89B",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FF864B_DCAD_4B02_41B8_0D5173423C9E_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA110BD4_E18B_ADD8_41E8_DF2559028311",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA10ABDB_E18B_ADC8_41E5_462B56064E8D",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6FDCA3B_DCAD_FB02_41E7_06F3B8543701_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FAEF7BDC_E18B_ADC8_41BF_C5BD40C7F4AE",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9F5C93_E17C_3528_41E9_B3DB76BB53F1",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_17_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9F3C93_E17C_3528_41D7_2E6DFEFAEB06",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_18_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF9FDC93_E17C_3528_41D0_5FD1A365C12D",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D6F83127_DCAC_C902_41D2_A79BFA6FE7CD_0_HS_19_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FA13CBCD_E18B_ADC8_41E3_DEB530E2AD9B",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
}],
 "scrollBarMargin": 2,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "Player461"
 },
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "gap": 10,
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 }
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
