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
      'Ward 1': [
        370630003012,
        370630016011,
        370630016032,
        370630009002,
        370630013011,
        370630017092,
        370630016012,
        370630009001,
        370630005002,
        370630018013,
        370630002003,
        370630002002,
        370630021001,
        370630001011,
        370630001012,
        370630001021,
        370630010022,
        370630010023,
        370630010024,
        370630011001,
        370630011002,
        370630013031,
        370630013041,
        370630013032,
        370630015031,
        370630010011,
        370630010012,
        370630022001,
        370630017101,
        370630017102,
        370630017112,
        370630016031,
        370630017051,
        370630017081,
        370630017091,
        370630017093,
        370630018012].map(String),
      'Ward 2': [
        370630020132,
        370630014001,
        370630020133,
        370630020283,
        370630020202,
        370630018062,
        370630018073,
        370630020271,
        370630020212,
        370630020221,
        370630020222,
        370630020242,
        370630020243,
        370630020251,
        370630020252,
        370630020253,
        370630020273,
        370630020282,
        370630018024,
        370630018071,
        370630018072,
        370630018081,
        370630018082,
        370630020241,
        370630020261,
        370630020272,
        370630020281,
        370630014002,
        370630018092,
        370630020131,
        370630020262,
        370630018021,
        370630018022,
        370630018023,
        370630020091,
        370630020092,
        370630020093,
        370630010013].map(String),
      'Ward 3': [
        370630020072,
        370630020182,
        370630020082,
        370630020081,
        370630004011,
        370630004012,
        370630004013,
        370630005001,
        370630006001,
        370630006002,
        370630007002,
        370630007003,
        370630015023,
        370630006003,
        370630015024,
        370630017062,
        370630017075,
        370630020153,
        370630020162,
        370630020173,
        370630020183,
        370630020193,
        370630020211,
        370630020231,
        370630020232,
        370630020172,
        370630017074,
        370630020191,
        370630015011,
        370630015021,
        370630015022,
        370630017052,
        370630017053,
        370630017061,
        370630017072,
        370630017071,
        370630017111,
        370630017113,
        370630020071,
        370630020151,
        370630020152,
        370630020161,
        370630017073,
        370630020073].map(String),
    },
  },
};

module.exports = selectGroups;
