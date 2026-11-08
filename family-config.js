// ── THE ENVIROTHON CLASS SITE'S OWN CONFIG (not Howe's) ─────────────────────────────────────────
// Fill the five PASTE_ values from the Envirothon Firebase project: Project settings → Your apps → Web app → Config.
// `edition: "envirothon"` is THE switch that turns the class site on. Nothing else here needs changing.
window.HA_FAMILY = {
  familyId: "envirothon",            // the site's id (each family's own id comes from their login record)
  familyName: "Envirothon",
  edition: "envirothon",
  className: "MS Science 2026-27",   // the © line: "licensed to <className> for the 2026-27 season"
  firebase: {
    apiKey:      "PASTE_API_KEY",
    authDomain:  "howe-envirothon.firebaseapp.com",
    databaseURL: "https://howe-envirothon-default-rtdb.firebaseio.com",
    projectId:   "howe-envirothon",
    appId:       "PASTE_APP_ID"
  },
  envirothon: { firebase: {          // the same five values again (the mirror block publishes into this same project)
    apiKey:      "PASTE_API_KEY",
    authDomain:  "howe-envirothon.firebaseapp.com",
    databaseURL: "https://howe-envirothon-default-rtdb.firebaseio.com",
    projectId:   "howe-envirothon",
    appId:       "PASTE_APP_ID"
  } },
  roster: [{id:"student", name:"Student", color:"#2d6a4f", badge:"#dcfce7", schoolAge:true}]   // never shown; a kid's real name comes from the family instance
};
