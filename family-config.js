// ── THE ENVIROTHON CLASS SITE'S OWN CONFIG (not Howe's) ─────────────────────────────────────────
// Filled 2026-11-08 from the howe-envirothon project (Project settings → Your apps → Config). These are public identifiers; the rules are the lock.
// `edition: "envirothon"` is THE switch that turns the class site on. Nothing else here needs changing.
window.HA_FAMILY = {
  familyId: "envirothon",            // the site's id (each family's own id comes from their login record)
  familyName: "Envirothon",
  edition: "envirothon",
  className: "MS Science 2026-27",   // the © line: "licensed to <className> for the 2026-27 season"
  firebase: {
    apiKey:      "AIzaSyA0TClq3p_rsTOXrl9NFxQSLsGf6Ao33hc",
    authDomain:  "howe-envirothon.firebaseapp.com",
    databaseURL: "https://howe-envirothon-default-rtdb.firebaseio.com",
    projectId:   "howe-envirothon",
    appId:       "1:381633534809:web:a04576c76290f25b81ca48"
  },
  envirothon: { firebase: {          // the same five values again (the mirror block publishes into this same project)
    apiKey:      "AIzaSyA0TClq3p_rsTOXrl9NFxQSLsGf6Ao33hc",
    authDomain:  "howe-envirothon.firebaseapp.com",
    databaseURL: "https://howe-envirothon-default-rtdb.firebaseio.com",
    projectId:   "howe-envirothon",
    appId:       "1:381633534809:web:a04576c76290f25b81ca48"
  } },
  roster: [{id:"student", name:"Student", color:"#2d6a4f", badge:"#dcfce7", schoolAge:true}]   // never shown; a kid's real name comes from the family instance
};
