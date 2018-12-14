// __________________________________
//   Select Groups                  |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//  Use this to specify subgroups, with each group being an array of neighborhood id's
//  Set selectGroups to null if you don't care about this.

const selectGroups = {
    'City Council Ward': {
        'blockgroup': {
            'Ward 1': [370630001011, 370630001012, 370630001021, 370630001022, 370630002001, 370630002002, 370630002003, 370630003011, 370630003012, 370630003013, 370630003021, 370630003022, 370630003023, 370630004021, 370630005002, 370630005003, 370630005004, 370630007001, 370630009001, 370630009002, 370630010011, 370630010012, 370630010021, 370630010022, 370630010023, 370630010024, 370630011001, 370630011002, 370630013011, 370630013031, 370630013032, 370630013041, 370630015031, 370630016011, 370630016012, 370630016031, 370630016032, 370630017051, 370630017081, 370630017091, 370630017092, 370630017093, 370630017101, 370630017102, 370630017112, 370630018012, 370630018013, 370630021001, 370630022001, 370630023001, 370630023002].map(String),
            'Ward 2': [370630010013, 370630014001, 370630014002, 370630018021, 370630018022, 370630018023, 370630018024, 370630018062, 370630018071, 370630018072, 370630018073, 370630018081, 370630018082, 370630018092, 370630020091, 370630020092, 370630020093, 370630020131, 370630020132, 370630020133, 370630020202, 370630020212, 370630020221, 370630020222, 370630020241, 370630020242, 370630020243, 370630020251, 370630020252, 370630020253, 370630020261, 370630020262, 370630020271, 370630020272, 370630020273, 370630020281, 370630020282, 370630020283].map(String),
            'Ward 3': [370630004011, 370630004012, 370630004013, 370630005001, 370630006001, 370630006002, 370630006003, 370630007002, 370630007003, 370630015011, 370630015021, 370630015022, 370630015023, 370630015024, 370630017052, 370630017053, 370630017061, 370630017062, 370630017071, 370630017072, 370630017073, 370630017074, 370630017075, 370630017111, 370630017113, 370630020071, 370630020072, 370630020073, 370630020081, 370630020082, 370630020151, 370630020152, 370630020153, 370630020161, 370630020162, 370630020172, 370630020173, 370630020182, 370630020183, 370630020191, 370630020193, 370630020211, 370630020231, 370630020232].map(String),
        },
        'tract': {
            'Ward 1': [37063001304, 37063002200, 37063001710, 37063000101, 37063001708, 37063001709, 37063001002, 37063001503, 37063001100, 37063001301, 37063000301, 37063001303, 37063001001, 37063002300, 37063000102, 37063000200, 37063000302, 37063000402, 37063000500, 37063000700, 37063000900].map(String),
            'Ward 2': [37063001808, 37063002009, 37063002026, 37063002022, 37063001400, 37063001802, 37063002013, 37063001807, 37063001809, 37063002025, 37063002027, 37063001001, 37063002024, 37063002028].map(String),
            'Ward 3': [37063002021, 37063001711, 37063002023, 37063001501, 37063001502, 37063001706, 37063002007, 37063002017, 37063002018, 37063001707, 37063001705, 37063002008, 37063002015, 37063002016, 37063000401, 37063000500, 37063000600, 37063000700].map(String),
        },
    },
  'School Assignment Zone': {
    'blockgroup': {
      'Bethesda': [370630020271, 370630020283, 370630018091, 370630020282, 370630018024, 370630018092, 370630020262, 370630014002, 370630020091, 370630020281, 370630014001, 370639801001].map(String),
      // CC Spaulding has manual addition of Tract 13.03, Blockgroup 1 because the school is in that blockgroup.
      'C.C. Spaulding': [370630007002, 370630007001, 370630023002, 370630023001, 370630005004, 370630005003, 370630013031 370630013032, 370630013041, 370630013011].map(String),
      'Creekside': [370630020221, 370630020192, 370630020202, 370630020211, 370630020212, 370630020183, 370630020193, 370630020182, 370630020201, 370630020181, 370630020191].map(String),
      'E.K. Powe': [370630003022, 370630003012, 370630015011, 370630015021, 370630005001, 370630015031, 370630003023, 370630004011, 370630003013, 370630005002, 370630003011, 370630004021, 370630004012, 370630004013].map(String),
      'Easley': [370630017111, 370630016031, 370630017074, 370630016041, 370630016042].map(String),
      'Eastway': [370630010024, 370630010011, 370630010021, 370630010023, 370630002002, 370630009001, 370630009002, 370630002001, 370630011001].map(String),
      'Eno Valley': [370630017081, 370630017091, 370630017093, 370630016032, 370630016042, 370630016013, 370630016012, 370630017092].map(String),
      'Fayetteville St': [370630020093, 370630013031, 370630013041, 370630020092, 370630013032].map(String),
      'Forest View': [370630020173, 370630020172, 370630020153, 370630020162, 370630020161, 370630006003, 370630015023, 370630015024, 370630020171, 370630015022].map(String),
      'Glenn': [370630018012, 370630022001, 370630017091, 370630018013, 370630001012, 370630001021, 370630001011, 370630003021, 370630018011, 370630018014, 370630002003, 370630018015].map(String),
      'Hillandale': [370630017062, 370630017075, 370630017113, 370630017072, 370630017052, 370630017061, 370630017073, 370630017071, 370630017074].map(String),
      'Holt': [370630017051, 370630017093, 370630017101, 370630017053, 370630017112, 370630017102, 370630001022].map(String),
      'Hope Valley': [370630020081, 370630020072, 370630020082, 370630020152, 370630020071, 370630020151, 370630020162, 370630020073, 370630020241].map(String),
      'Lakewood': [370630007003, 370630006002, 370630006001, 370630005003, 370630005004].map(String),
      'Little River': [370630016013, 370630016033, 370630021001, 370630016043, 370630016011].map(String),
      'Mangum': [370630021003, 370630021001, 370630016034, 370630021002].map(String),
      'Merrick-Moore': [370630018062, 370630018021, 370630018022, 370630018061, 370630010021, 370630018011].map(String),
      'Oak Grove': [370630018072, 370630018073, 370630018081, 370630018022, 370630019002].map(String),
      'Parkwood': [370630020222, 370630020273, 370630020252, 370630020253, 370630020133, 370630020131, 370630020132, 370630020272].map(String),
      'Southwest': [370630020261, 370630020241, 370630020243, 370630020251, 370630020093, 370630020232, 370630020242, 370630020231].map(String),
      'Spring Valley': [370630018071, 370630018023, 370630019002, 370630018082, 370630019001].map(String),
      'W.G. Pearson': [370630023002, 370630011001, 370630011002, 370630013011].map(String),
      'Y.E. Smith': [370630010013, 370630010022, 370630010023, 370630011002, 370630010012].map(String),
    },
  },
};

module.exports = selectGroups;
