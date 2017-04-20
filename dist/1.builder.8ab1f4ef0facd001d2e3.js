webpackJsonp([1],{

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(356);
	
	var _builder = __webpack_require__(390);
	
	var _Builder = __webpack_require__(413);
	
	var _Builder2 = _interopRequireDefault(_Builder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  selectCrew: _builder.selectCrew,
	  selectCharacter: _builder.selectCharacter,
	  loadResources: _builder.loadResources,
	  addAllCharacters: _builder.addAllCharacters
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    crew: state.builder,
	    reputation: state.reputation,
	    funding: state.funding
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Builder2.default);

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addAllCharactersAction = exports.selectCrewAction = exports.actions = exports.ADD_ALL_CHARACTERS = exports.LOAD_RESOURCES = exports.SELECT_CHARACTER = exports.SELECT_CREW = exports.SELECT_CREW_UNCONFIRMED = undefined;
	
	var _defineProperty2 = __webpack_require__(391);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _toConsumableArray2 = __webpack_require__(392);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _assign = __webpack_require__(281);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _typeof2 = __webpack_require__(315);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _ACTION_HANDLERS;
	
	exports.selectCrew = selectCrew;
	exports.selectCharacter = selectCharacter;
	exports.loadResources = loadResources;
	exports.addAllCharacters = addAllCharacters;
	exports.default = builderReducer;
	
	var _crewRulesEngine = __webpack_require__(402);
	
	var _crewRulesEngine2 = _interopRequireDefault(_crewRulesEngine);
	
	var _loadResources = __webpack_require__(404);
	
	var _loadResources2 = _interopRequireDefault(_loadResources);
	
	var _common = __webpack_require__(403);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Constants
	var SELECT_CREW_UNCONFIRMED = exports.SELECT_CREW_UNCONFIRMED = 'SELECT_CREW_UNCONFIRMED';
	var SELECT_CREW = exports.SELECT_CREW = 'SELECT_CREW';
	var SELECT_CHARACTER = exports.SELECT_CHARACTER = 'SELECT_CHARACTER';
	var LOAD_RESOURCES = exports.LOAD_RESOURCES = 'LOAD_RESOURCES';
	var ADD_ALL_CHARACTERS = exports.ADD_ALL_CHARACTERS = 'ADD_ALL_CHARACTERS';
	
	// Actions
	
	/* The SELECT_CREW reducer is used to do choose which crew the user currently
	has selected. This can be destructive as if there is a current crew
	selected with characters selected inside of it, they will be wiped out. */
	function selectCrew() {
	  var selectedCrew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
	
	  return {
	    type: SELECT_CREW,
	    crew: selectedCrew
	  };
	}
	
	/* The SELECT_CHARACTER reducer is used to add or remove a character from the
	currently built band. */
	function selectCharacter() {
	  var characterAlias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
	
	  console.log('Selected character: ' + characterAlias);
	  return {
	    type: SELECT_CHARACTER,
	    characterAlias: characterAlias
	  };
	}
	
	function loadResources() {
	  return {
	    type: LOAD_RESOURCES
	  };
	}
	
	function addAllCharacters() {
	  return {
	    type: ADD_ALL_CHARACTERS
	  };
	}
	
	var actions = exports.actions = {
	  selectCrew: selectCrew,
	  selectCharacter: selectCharacter,
	  loadResources: loadResources
	};
	
	var selectCrewAction = exports.selectCrewAction = function selectCrewAction(state, action) {
	  var crewName = action.crew.name;
	  var charFilter = function charFilter(characters, character) {
	    if (character.crews.includes(action.crew.id) || character.crews.includes('*') && !character.hates.includes(action.crew.id)) {
	      if ((0, _typeof3.default)(character.rank) === 'object') {
	        characters.push((0, _assign2.default)({}, character, {
	          rank: character.rank.find(function (rank) {
	            return rank.crew === action.crew.id || rank.crew === '*';
	          }).rank
	        }));
	      } else {
	        characters.push(character);
	      }
	    }
	    return characters;
	  };
	  var resultAvail = void 0;
	  if (action.crew.roster === undefined) {
	    resultAvail = state.allCharacters.reduce(charFilter, []);
	  } else {
	    (function () {
	      var allCharacters = state.allCharacters;
	      resultAvail = action.crew.roster.reduce(function (characters, rosterEntry) {
	        var characterMatches = allCharacters.filter(function (character) {
	          return character.alias.indexOf(rosterEntry.name) !== -1;
	        });
	        if (characterMatches.length > 0) {
	          var rankedMatches = characterMatches.map(function (character) {
	            return (0, _assign2.default)({}, character, {
	              rank: rosterEntry.boss === 'always' ? 'Boss' : rosterEntry.boss === 'yes' ? 'Optional' : 'No'
	            });
	          });
	          return characters.concat(rankedMatches);
	        } else {
	          return characters;
	        }
	      }, []);
	    })();
	  }
	  resultAvail.sort(_common.sortCharacters);
	  return (0, _assign2.default)({}, state, {
	    crewName: crewName,
	    availableCharacters: resultAvail,
	    characters: [],
	    hiddenCharacters: [],
	    reputation: 0,
	    funding: 0,
	    leaders: 0,
	    sidekicks: 0,
	    freeAgents: 0
	  });
	};
	
	var addAllCharactersAction = exports.addAllCharactersAction = function addAllCharactersAction(state, action) {
	  if (state.crewName === 'default') {
	    console.log('Received a default crew. Skipping.');
	    return state;
	  }
	  return (0, _assign2.default)({}, state, {
	    availableCharacters: [],
	    hiddenCharacters: [],
	    characters: [].concat((0, _toConsumableArray3.default)(state.characters), (0, _toConsumableArray3.default)(state.hiddenCharacters), (0, _toConsumableArray3.default)(state.availableCharacters))
	  });
	};
	
	// Action Handlers
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, SELECT_CREW, function (state, action) {
	  return selectCrewAction(state, action);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, SELECT_CHARACTER, function (state, action) {
	  return (0, _crewRulesEngine2.default)(state, action);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, LOAD_RESOURCES, function (state, action) {
	  return (0, _loadResources2.default)(state, action);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, ADD_ALL_CHARACTERS, function (state, action) {
	  return addAllCharactersAction(state, action);
	}), _ACTION_HANDLERS);
	
	var initialState = {
	  crewName: 'default',
	  characters: [],
	  availableCharacters: [],
	  allCharacters: [],
	  allTraits: [],
	  allCrews: [],
	  hiddenCharacters: [],
	  reputation: 0,
	  funding: 0,
	  leaders: 0,
	  sidekicks: 0,
	  freeAgents: 0
	};
	function builderReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var result = state;
	  var handler = ACTION_HANDLERS[action.type];
	  result = handler ? handler(state, action) : state;
	  return result;
	}

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(311);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(393);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(394), __esModule: true };

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(318);
	__webpack_require__(395);
	module.exports = __webpack_require__(7).Array.from;

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(8)
	  , $export        = __webpack_require__(5)
	  , toObject       = __webpack_require__(301)
	  , call           = __webpack_require__(396)
	  , isArrayIter    = __webpack_require__(397)
	  , toLength       = __webpack_require__(292)
	  , createProperty = __webpack_require__(398)
	  , getIterFn      = __webpack_require__(399);
	
	$export($export.S + $export.F * !__webpack_require__(401)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(323)
	  , ITERATOR   = __webpack_require__(328)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(19);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(400)
	  , ITERATOR  = __webpack_require__(328)('iterator')
	  , Iterators = __webpack_require__(323);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(23)
	  , TAG = __webpack_require__(328)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(328)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(281);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _toConsumableArray2 = __webpack_require__(392);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _common = __webpack_require__(403);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dumbCharFinder = function dumbCharFinder(charArray, charAlias) {
	  for (var i = 0; i < charArray.length; i++) {
	    if (charArray[i].alias !== undefined && charArray[i].alias === charAlias) {
	      return charArray[i];
	    }
	  }
	};
	
	var removeCharacter = function removeCharacter(state, action, char) {
	  // This is the case where the current character is in the selected
	  // characters.
	  var index = state.characters.indexOf(char);
	  var leaders = state.leaders;
	  var sidekicks = state.sidekicks;
	  var freeAgents = state.freeAgents;
	
	  if (char.rank === 'Leader') {
	    leaders = state.leaders - 1;
	  } else if (char.rank === 'Sidekick') {
	    sidekicks = state.sidekicks - 1;
	  } else if (char.rank === 'Free Agent') {
	    freeAgents = state.freeAgents - 1;
	  }
	
	  var newCharacters = [].concat((0, _toConsumableArray3.default)(state.characters.slice(0, index)), (0, _toConsumableArray3.default)(state.characters.slice(index + 1)));
	  var hiddenCharactersToAdd = state.hiddenCharacters.reduce(function (repopCharacters, character) {
	    var sameName = character.name === char.name;
	    var repopLeader = char.rank === 'Leader' && (character.rank === 'Leader' || character.rank === 'Sidekick' && sidekicks === 1);
	    var repopSidekick = char.rank === 'Sidekick' && (character.rank === 'Sidekick' || sidekicks === 1 && character.rank === 'Leader');
	    if (sameName || repopLeader || repopSidekick) {
	      repopCharacters.push(character);
	    }
	    return repopCharacters;
	  }, []);
	  var newAvailChars = [].concat((0, _toConsumableArray3.default)(state.availableCharacters), [char], (0, _toConsumableArray3.default)(hiddenCharactersToAdd));
	  var hiddenCharacters = state.hiddenCharacters.reduce(function (characters, character) {
	    if (hiddenCharactersToAdd.find(function (findChar) {
	      return character.alias === findChar.alias;
	    }) === undefined) {
	      return characters.push(character);
	    } else {
	      return characters;
	    }
	  }, []);
	  return createFinalState(state, newCharacters, newAvailChars, hiddenCharacters, leaders, sidekicks, freeAgents);
	};
	
	var addCharacter = function addCharacter(state, action) {
	  var char = dumbCharFinder(state.availableCharacters, action.characterAlias);
	  if (char === undefined) {
	    console.log('Failed to find the provided character: ' + action.characterAlias);
	    return state;
	  }
	
	  var leaders = state.leaders;
	  var sidekicks = state.sidekicks;
	  var freeAgents = state.freeAgents;
	
	  if (char.rank === 'Leader') {
	    leaders = state.leaders + 1;
	  } else if (char.rank === 'Sidekick') {
	    sidekicks = state.sidekicks + 1;
	  } else if (char.rank === 'Free Agent') {
	    freeAgents = state.freeAgents + 1;
	  }
	
	  var newCharacters = [].concat((0, _toConsumableArray3.default)(state.characters), [char]);
	  // TODO: Determine if this is changing the state tree...
	  var newAvailChars = state.availableCharacters.reduce(function (newAvailCharacters, character) {
	    var sameName = character.name === char.name && character.alias !== char.alias;
	    var leaderHide = char.rank === 'Leader' && (character.rank === 'Leader' || character.rank === 'Sidekick' && sidekicks === 1);
	    var sidekickHide = char.rank === 'Sidekick' && (character.rank === 'Sidekick' && leaders + sidekicks === 2 || character.rank === 'Leader' && sidekicks === 2);
	    if (character.alias !== char.alias && !sameName && !leaderHide && !sidekickHide) {
	      newAvailCharacters.push(character);
	    }
	    return newAvailCharacters;
	  }, []);
	  var charactersToHide = state.availableCharacters.reduce(function (hidingCharacters, character) {
	    var sameName = character.name === char.name && character.alias !== char.alias;
	    var leaderHide = char.rank === 'Leader' && (character.rank === 'Leader' || character.rank === 'Sidekick' && sidekicks === 1);
	    var sidekickHide = char.rank === 'Sidekick' && (character.rank === 'Sidekick' && leaders + sidekicks === 2 || character.rank === 'Leader' && sidekicks === 2);
	    if (character.alias !== char.alias && (sameName || leaderHide || sidekickHide)) {
	      hidingCharacters.push(character);
	    }
	    return hidingCharacters;
	  }, []);
	  var hiddenCharacters = [].concat((0, _toConsumableArray3.default)(state.hiddenCharacters), (0, _toConsumableArray3.default)(charactersToHide));
	  return createFinalState(state, newCharacters, newAvailChars, hiddenCharacters, leaders, sidekicks, freeAgents);
	};
	
	var createFinalState = function createFinalState(state, newCharacters, newAvailChars, hiddenCharacters, leaders, sidekicks, freeAgents) {
	  newAvailChars.sort(_common.sortCharacters);
	  newCharacters.sort(_common.sortCharacters);
	  var newRep = newCharacters.reduce(function (repSum, character) {
	    return repSum + character.reputation;
	  }, 0);
	  var newFunding = newCharacters.reduce(function (fundSum, character) {
	    return fundSum + character.funding;
	  }, 0);
	  return (0, _assign2.default)({}, state, {
	    characters: newCharacters,
	    availableCharacters: newAvailChars,
	    reputation: newRep,
	    funding: newFunding,
	    hiddenCharacters: hiddenCharacters,
	    leaders: leaders,
	    sidekicks: sidekicks,
	    freeAgents: freeAgents
	  });
	};
	
	var characterSelected = function characterSelected(state, action) {
	  var char = dumbCharFinder(state.characters, action.characterAlias);
	
	  if (char !== undefined) {
	    return removeCharacter(state, action, char);
	  } else {
	    // The selected character is in the available characters.
	    return addCharacter(state, action);
	  }
	};
	
	exports.default = characterSelected;

/***/ },

/***/ 403:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var sortCharacters = exports.sortCharacters = function sortCharacters(a, b) {
	  switch (a.rank) {
	    case 'Leader':
	      if (b.rank === 'Leader') {
	        return b.reputation - a.reputation;
	      } else {
	        return -1;
	      }
	    case 'Sidekick':
	      if (b.rank === 'Leader') {
	        return 1;
	      } else if (b.rank === 'Sidekick') {
	        return b.reputation - a.reputation;
	      } else {
	        return -1;
	      }
	    case 'Free Agent':
	      if (b.rank === 'Leader' || b.rank === 'Sidekick') {
	        return 1;
	      } else if (b.rank === 'Free Agent') {
	        return b.reputation - a.reputation;
	      } else {
	        return -1;
	      }
	    case 'Henchman':
	      if (b.rank === 'Henchman') {
	        return b.reputation - a.reputation;
	      } else {
	        return 1;
	      }
	    case 'Boss':
	      if (b.rank === 'Boss') {
	        return b.reputation - a.reputation;
	      } else {
	        return -1;
	      }
	    case 'Optional':
	      if (b.rank === 'Boss') {
	        return 1;
	      } else if (b.rank === 'Optional') {
	        return b.reputation - a.reputation;
	      } else {
	        return -1;
	      }
	    case 'No':
	      if (b.rank !== 'No') {
	        return 1;
	      } else {
	        return b.reputation - a.reputation;
	      }
	  }
	};

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(281);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _stringify = __webpack_require__(405);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(407);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _characters = __webpack_require__(410);
	
	var _crews = __webpack_require__(411);
	
	var _traits = __webpack_require__(412);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findTrait = function findTrait(populatedTraits, traitName) {
	  var foundTrait = {
	    name: traitName,
	    phase: 'Unknown',
	    rule: 'Unknown',
	    page: 'Unknown',
	    cost: ''
	  };
	  if (typeof traitName === 'string') {
	    var retrievedTrait = void 0;
	    // Coward's Reward is a problematic trait. This is a hack. I wish I had a better solution.
	    if (traitName.indexOf('Coward') !== -1) {
	      retrievedTrait = _traits.allTraits.find(function (trait) {
	        return trait !== null && trait.name === 'Coward\'s Reward';
	      });
	    } else {
	      retrievedTrait = _traits.allTraits.find(function (trait) {
	        return trait !== null && trait.name === traitName;
	      });
	    }
	
	    if (retrievedTrait !== undefined) {
	      foundTrait = retrievedTrait;
	    }
	  } else {
	    var keys = (0, _keys2.default)(traitName);
	    // TODO -coudl this be breaking the tests?
	    keys.shift();
	    var replaceTrait = _traits.allTraits.find(function (trait) {
	      return trait != null && trait.name === traitName.name;
	    });
	    var replaceAllInKey = function replaceAllInKey(result, key) {
	      return result.replace(new RegExp('-' + key + '-', 'g'), traitName[key]);
	    };
	    foundTrait = {
	      name: keys.reduce(replaceAllInKey, replaceTrait.nameFunc),
	      phase: replaceTrait.phase,
	      rule: keys.reduce(replaceAllInKey, replaceTrait.rule),
	      page: replaceTrait.page,
	      cost: replaceTrait.cost
	    };
	  }
	  populatedTraits.push(foundTrait);
	  return populatedTraits;
	};
	
	var populateTraits = function populateTraits(characters, character) {
	  if (character === undefined) {
	    return characters;
	  }
	  if (character.traits !== undefined) {
	    var poppedTraits = character.traits.reduce(findTrait, []);
	    character.traitText = poppedTraits;
	  } else {
	    console.log('This character lacks traits? ' + (0, _stringify2.default)(character));
	  }
	  characters.push(character);
	  return characters;
	};
	
	var loadAllResources = function loadAllResources(state, action) {
	  // Now... Add all traits to each character... Ooph...
	  // TODO: Optimize the %@#$^ out of this in the future.
	
	  var allCharacters = _characters.loadedCharacters.reduce(populateTraits, []);
	  return (0, _assign2.default)({}, state, {
	    allTraits: _traits.allTraits,
	    allCrews: _crews.allCrews,
	    allCharacters: allCharacters
	  });
	};
	
	exports.default = loadAllResources;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(406), __esModule: true };

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(408), __esModule: true };

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(409);
	module.exports = __webpack_require__(7).Object.keys;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(301)
	  , $keys    = __webpack_require__(285);
	
	__webpack_require__(308)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 410:
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var loadedCharacters=exports.loadedCharacters=[{'name':'Unknown','alias':'404','rank':'Henchman','reputation':35,'funding':0,'crews':['tf'],'hates':[],'traits':['Devastating Blow','Gas Mask','Brutal','Criminal','Mobster'],'wp':5,'str':5,'mov':2,'att':4,'def':4,'end':5,'spc':3},{'name':'Aaron Cash','alias':'Unknown','rank':'Sidekick','reputation':55,'funding':150,'crews':['lf'],'hates':[],'traits':['Bulletproof Vest','Hardened','Lantern','Searcher','Unstoppable'],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':6,'spc':3},{'name':'Agent O\'Connell','alias':'Agent O\'Connell','rank':'Henchman','reputation':29,'funding':0,'crews':['bt','ga','lf'],'hates':[],'traits':['Arrest','Veteran'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Agent Ron','alias':'Agent Ron','rank':'Henchman','reputation':25,'funding':300,'crews':['bt','ga','lf'],'hates':[],'traits':['Arrest','Street Guy'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Alfred Pennyworth','alias':'Alfred Pennyworth','rank':'Henchman','reputation':30,'funding':0,'crews':['bt'],'hates':[],'traits':['Business Agent','Medic','Informer','Veteran'],'wp':5,'str':5,'mov':2,'att':2,'def':3,'end':5,'spc':3},{'name':'Michael Sommers','alias':'Alpha','rank':'Henchman','reputation':38,'funding':500,'crews':['bt','ga','lf'],'hates':[],'traits':['Shooter','Lantern','Bulletproof Vest',{'name':'Elite','type':'S.W.A.T.'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Anatoly','rank':'Henchman','reputation':33,'funding':0,'crews':['bm'],'hates':[],'traits':['Football Gear','Tireless','Veteran','Brutal'],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Jason Todd','alias':'Arkham Knight','rank':'Sidekick','reputation':95,'funding':500,'crews':['sc'],'hates':[],'traits':['Acrobat','Kevlar Vest','Rapid Fire','Arrogant','Agile','Martial Artist','Order','Strategist',{'name':'Elite Boss','type':''}],'wp':7,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Jason Todd','alias':'Arkham Knight','rank':'Leader','reputation':105,'funding':0,'crews':['sc'],'hates':[],'traits':['Acrobat','Kevlar Vest','Rapid Fire','Agile','Martial Artist','Undercover','Vanish','Fully Equipped'],'wp':7,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Oliver Queen','alias':'Arrow (CW)','rank':'Leader','reputation':125,'funding':0,'crews':['ga'],'hates':[],'traits':['Acrobat','Good Aim','Hook Arrow','Multifire','Shooter','Master Marksman','Counter Attack','Stealth'],'wp':7,'str':4,'mov':4,'att':4,'def':4,'end':8,'spc':3},{'name':'Roy Harper','alias':'Arsenal (was Speedy)','rank':'Sidekick','reputation':74,'funding':200,'crews':['ga'],'hates':[],'traits':['Rapid Fire','Acrobat','Good Aim','Undercover','Charge'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Asker','rank':'Henchman','reputation':38,'funding':200,'crews':['jk'],'hates':[],'traits':['Demential Laugh','Bloodthirsty','Fast','Psycho'],'wp':5,'str':4,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'August','rank':'Henchman','reputation':25,'funding':0,'crews':['jk'],'hates':[],'traits':['Psycho','Tireless'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Michael Washington Lane','alias':'Azreal AK','rank':'Free Agent','reputation':77,'funding':150,'crews':['bt'],'hates':[],'traits':['Devastating','Acrobat','Bipolar','Fast','Kevlar Vest','Night Vision'],'wp':6,'str':3,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Classified','alias':'B.A.','rank':'Henchman','reputation':43,'funding':0,'crews':['*'],'hates':['jk','pn'],'traits':['360 Attack','Handyman','Runaway','Sturdy'],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Unknown','alias':'Bane (AC)','rank':'Leader','reputation':150,'funding':0,'crews':['bn'],'hates':[],'traits':['Titan Addict',{'name':'Titan Dose','count':2},{'name':'Primary Target','target':'Titan'},{'name':'Scheming','count':1},'Master Fighter','Desensitized','Large'],'wp':8,'str':3,'mov':3,'att':6,'def':3,'end':10,'spc':3},{'name':'Unknown','alias':'Bane (AO)','rank':'Leader','reputation':93,'funding':0,'crews':['bn'],'hates':[],'traits':['Large','Lethal Blow',{'name':'Venom Dose','count':2},'Master Fighter',{'name':'Scheming','count':2},'Sturdy'],'wp':7,'str':3,'mov':3,'att':5,'def':3,'end':8,'spc':3},{'name':'Unknown','alias':'Bane (DKR Movie)','rank':[{'crew':'bn','rank':'Leader'},{'crew':'ls','rank':'Sidekick'}],'reputation':96,'funding':0,'crews':['bn','ls'],'hates':[],'traits':[{'name':'Combo with','weapon':'Unarmed'},'Kill Them!','Brutal','Strategist','Desensitized','Runaway',{'name':'True Love','love':'Talia'}],'wp':7,'str':3,'mov':2,'att':5,'def':4,'end':8,'spc':3},{'name':'Bruce Wayne','alias':'Batman (Batfleck)','rank':'Leader','reputation':125,'funding':0,'crews':['bt'],'hates':[],'traits':['Bat-Armor MK 1','Batcape','Batclaw','Close Combat Master','Detective','Martial Artist','Sustained Defense'],'wp':8,'str':3,'mov':2,'att':5,'def':4,'end':8,'spc':3},{'name':'Barbara Gordon','alias':'Batgirl (Comic)','rank':'Sidekick','reputation':59,'funding':0,'crews':['bt','lf'],'hates':[],'traits':['Batclaw','Batcape',{'name':'Combo with','weapon':'Unarmed'},'Informer','Stealth','Sneak Attack','Martial Artist'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':6,'spc':3},{'name':'Barbara Gordon','alias':'Batgirl (TAS)','rank':'Free Agent','reputation':47,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Batclaw',{'name':'Combo with','weapon':'Unarmed'},'Distract','Survivor'],'wp':5,'str':5,'mov':3,'att':3,'def':4,'end':4,'spc':3},{'name':'Bruce Wayne','alias':'Batman Adam West','rank':'Leader','reputation':75,'funding':0,'crews':['bt'],'hates':[],'traits':['Millionaire','Batclaw','Arrest','Ka-Pow!!!!!','Detective','Veteran'],'wp':6,'str':4,'mov':2,'att':4,'def':4,'end':7,'spc':3},{'name':'Bruce Wayne','alias':'Batman AC','rank':'Leader','reputation':130,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Explosive Gel','Batclaw','Bat-Armor MK 1','Total Vision','Detective','Counter Attack','Martial Expert','Sneak Attack'],'wp':8,'str':3,'mov':3,'att':5,'def':5,'end':8,'spc':3},{'name':'Bruce Wayne','alias':'Batman Arkham Knight','rank':'Leader','reputation':150,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Batclaw','Night Vision',{'name':'Teamwork','counter':'1','target':'(All)'},'Bat-Armor MK III','Disruptor','Detective','Explosive Gel','Master Fighter','Sneak Attack','Martial Expert'],'wp':8,'str':3,'mov':2,'att':5,'def':5,'end':8,'spc':3},{'name':'Bruce Wayne','alias':'Batman (AO)','rank':'Leader','reputation':144,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Batclaw','Bat-Armor MK 1','Total Vision','Explosive Gel','Counter Attack','Sneak Attack','Detective'],'wp':8,'str':3,'mov':3,'att':5,'def':5,'end':9,'spc':3},{'name':'Bruce Wayne','alias':'Batman (Modern Age)','rank':'Leader','reputation':100,'funding':0,'crews':['bt'],'hates':[],'traits':['Acrobat','Batcape','Batclaw','Detective','Martial Artist','Sneak Attack','Stealth','The Dynamic Duo','Assistance'],'wp':7,'str':3,'mov':3,'att':5,'def':5,'end':8,'spc':3},{'name':'Bruce Wayne','alias':'Batman (DKR Movie)','rank':'Leader','reputation':120,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Batclaw','Arrest','Bat-Armor MK 2','Detective','Stealth',{'name':'Combo with','weapon':'Unarmed'},'Sneak Attack','Arrest'],'wp':8,'str':3,'mov':4,'att':4,'def':5,'end':8,'spc':3},{'name':'Bruce Wayne','alias':'Batman (TAS)','rank':'Leader','reputation':80,'funding':0,'crews':['bt'],'hates':[],'traits':['Acrobat','Batcape','Batclaw','Detective','Martial Artist'],'wp':7,'str':3,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Bruce Wayne','alias':'Batman (TDKR)','rank':'Leader','reputation':109,'funding':0,'crews':['bt'],'hates':[],'traits':['Batcape','Batclaw','Bat-Armor MK 1','Night Vision','Sneak Attack',{'name':'Combo with','weapon':'Unarmed'},'Detective','Obstinate','Veteran'],'wp':8,'str':3,'mov':2,'att':4,'def':4,'end':9,'spc':3},{'name':'Bruce Wayne','alias':'Batman Batpod (DKR)','rank':'Leader','reputation':150,'funding':0,'crews':['bt'],'hates':[],'traits':['Bat-Armor MK 2','Batpod','Fast','Detective','ECM'],'wp':8,'str':3,'mov':5,'att':4,'def':4,'end':8,'spc':3},{'name':'Kathy Kane','alias':'Batwoman','rank':'Sidekick','reputation':95,'funding':0,'crews':['bt','lf'],'hates':[],'traits':['Bat-Armor MK 1','Batclaw','Night Vision','Criminology','Detective','Searcher','Stealth','Technique'],'wp':7,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Benjamin Orchard','alias':'Benjamin Orchard','rank':'Leader','reputation':40,'funding':0,'crews':['co'],'hates':[],'traits':['Joy for the Victory','Court of Owls Crew','Order','Persuasive',{'name':'Scheming','count':1},'Veteran','Weapon Master'],'wp':6,'str':5,'mov':2,'att':2,'def':3,'end':6,'spc':3},{'name':'Angel Vallelunga','alias':'Bird','rank':'Sidekick','reputation':60,'funding':100,'crews':['bn'],'hates':[],'traits':['Bulletproof Vest','Climbing Rope','Self-Discipline','Veteran',{'name':'Weapon Master With','weapon':'Combat Machete'},'One of the Boys','Military Tradition',{'name':'Elite Boss','type':''}],'wp':6,'str':4,'mov':3,'att':3,'def':3,'end':7,'spc':3},{'name':'Dinah Drake Lance','alias':'Black Canary (Comic)','rank':'Free Agent','reputation':69,'funding':0,'crews':['ga','bt'],'hates':[],'traits':['Canary Cry','Acrobat','Martial Artist','Hidden','Technique'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'Dinah Drake Lance','alias':'Black Canary (TAS)','rank':'Free Agent','reputation':50,'funding':0,'crews':['ga'],'hates':[],'traits':['Canary Cry','Acrobat',{'name':'Teamwork','counter':'2','target':'Green Arrow'},'Undercover','Martial Artist'],'wp':5,'str':5,'mov':4,'att':3,'def':4,'end':5,'spc':3},{'name':'David','alias':'Black Manta','rank':'Free Agent','reputation':120,'funding':350,'crews':['*'],'hates':['bt','lf','ga','oc'],'traits':['Tracking','Night Vision','Stealth','Weapon Master','Amphibious','Bulletproof Vest','Scientific','Strategist'],'wp':8,'str':4,'mov':3,'att':4,'def':4,'end':8,'spc':4},{'name':'Roman Sionis','alias':'Black Mask','rank':'Leader','reputation':79,'funding':0,'crews':['bm'],'hates':[],'traits':['No Mercy!','Mob','Brutal','Criminal','Order','Strategist',{'name':'Elite Boss','type':''}],'wp':7,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Blue Penguin','rank':'Henchman','reputation':13,'funding':0,'crews':['pn'],'hates':[],'traits':['Mobster'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Blue Penguin 1','rank':'Henchman','reputation':13,'funding':0,'crews':['pn'],'hates':[],'traits':['Mobster'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Blue Penguin 2','rank':'Henchman','reputation':15,'funding':300,'crews':['pn'],'hates':[],'traits':['Mobster'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Blue Penguin 3','rank':'Henchman','reputation':17,'funding':0,'crews':['pn'],'hates':[],'traits':['Mobster'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Bob','rank':'Henchman','reputation':16,'funding':150,'crews':['tf'],'hates':[],'traits':['Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'None','alias':'Bobbie','rank':'Henchman','reputation':25,'funding':100,'crews':['jk'],'hates':[],'traits':['Bot','Fly','Funny Bomb','Safe Hands'],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':3,'spc':3},{'name':'None','alias':'Bobbie MkII','rank':'Henchman','reputation':30,'funding':100,'crews':['jk'],'hates':[],'traits':['Bot','Fly','Funny Bomb','Safe Hands'],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Borgon','rank':'Henchman','reputation':42,'funding':0,'crews':['jk'],'hates':[],'traits':['Brutal','Sturdy','Demential Laugh','Criminal'],'wp':5,'str':4,'mov':2,'att':4,'def':3,'end':7,'spc':3},{'name':'Unknown','alias':'Boris','rank':'Henchman','reputation':33,'funding':200,'crews':['tf','oc','bm'],'hates':[],'traits':['Criminal','Persuasive','Street Guy',{'name':'Elite','type':'Gangster'}],'wp':5,'str':4,'mov':3,'att':4,'def':3,'end':7,'spc':3},{'name':'Borj','alias':'Borj','rank':'Henchman','reputation':50,'funding':150,'crews':['pi'],'hates':[],'traits':['Plant','Control Pheromones','Poison Master',{'name':'Elite','type':'Plants'}],'wp':6,'str':4,'mov':0,'att':4,'def':4,'end':6,'spc':3},{'name':'Bot Mk 1','alias':'Bot Mk 1','rank':'Henchman','reputation':17,'funding':0,'crews':['rd'],'hates':[],'traits':['Bot',{'name':'Can you Solve this?','weapon':'this'}],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Bot Mk 2','alias':'Bot Mk 2','rank':'Henchman','reputation':19,'funding':0,'crews':['rd'],'hates':[],'traits':['Bot',{'name':'Can you Solve this?','weapon':'this'}],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':3,'spc':3},{'name':'Bot Mk 3','alias':'Bot Mk 3','rank':'Henchman','reputation':20,'funding':0,'crews':['rd'],'hates':[],'traits':['Bot',{'name':'Can you Solve this?','weapon':'this'}],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':6,'spc':3},{'name':'Classified','alias':'Bravo','rank':'Henchman','reputation':27,'funding':300,'crews':['bt','ga','lf'],'hates':[],'traits':['Veteran','Bulletproof Vest',{'name':'Elite','type':'S.W.A.T.'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Julian Gregory Day','alias':'Calendar Man','rank':'Free Agent','reputation':55,'funding':0,'crews':['*'],'hates':['bt','ga','lf','oc'],'traits':['Adaptable',{'name':'Assassin','points':5},'Deadly Strike','Handyman','Self-Discipline','Mastermind','Psycho','Undercover','Undead'],'wp':6,'str':4,'mov':1,'att':3,'def':3,'end':7,'spc':3},{'name':'George „Digger“ Harkness','alias':'Captain Boomerang','rank':'Free Agent','reputation':82,'funding':350,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Master Marksman','Tracking','Shooter','Ricochet','Dodge','Follow Me!'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':6,'spc':3},{'name':'George „Digger“ Harkness','alias':'Captain Boomerang (Suicide Squad)','rank':'Free Agent','reputation':48,'funding':200,'crews':['*'],'hates':['bt','ga','lf'],'traits':['Elusive','Master Marksman','Ricochet',{'name':'Primary Target','target':'Loot'},'Suicide Squad Member','Greed','Monitoring Device'],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Leonard Snart','alias':'Captain Cold (CW)','rank':[{'crew':'mf','rank':'Sidekick'},{'crew':'*','rank':'Free Agent'}],'reputation':72,'funding':400,'crews':['*'],'hates':['bt','ga','lf','jk','ls'],'traits':['Strategist','Leadership','Mastermind','Order','Ranged Master',{'name':'Teamwork','counter':'1','target':'Heatwave'}],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Carmine Falcone','alias':'The Roman','rank':'Leader','reputation':85,'funding':0,'crews':['oc'],'hates':[],'traits':['Lord of Business','Invaluable','Plead','Revenge','Runaway','Bluff','Demotivate','Grand Strategist','The Untouchable',{'name':'Elite Boss','type':''}],'wp':8,'str':5,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Selina Kyle','alias':'Catwoman (AC)','rank':'Free Agent','reputation':66,'funding':0,'crews':['*'],'hates':['lf','jk'],'traits':[{'name':'Primary Target','target':'Loot'},'Acrobat','Total Vision','Climbing Claws','Sneak Attack','Thief'],'wp':6,'str':5,'mov':4,'att':3,'def':5,'end':5,'spc':3},{'name':'Selina Kyle','alias':'Catwoman (Modern Age)','rank':'Free Agent','reputation':69,'funding':0,'crews':['*'],'hates':['lf','jk'],'traits':['Acrobat','Bluff','Coward‘s Reward','Sneaking','Thief','Backpack'],'wp':6,'str':5,'mov':4,'att':4,'def':5,'end':6,'spc':3},{'name':'Selina Kyle','alias':'Catwoman (TAS)','rank':'Free Agent','reputation':50,'funding':0,'crews':['*'],'hates':['lf','jk'],'traits':['Acrobat','Climbing Shoes','Agile','Pickpocket'],'wp':5,'str':5,'mov':4,'att':3,'def':5,'end':4,'spc':3},{'name':'Unknown','alias':'Clayface','rank':'Free Agent','reputation':116,'funding':0,'crews':['*'],'hates':['bt','lf','ga','bn'],'traits':['Claybody','Regeneration','Large','Sturdy','Adaptable','Undercover'],'wp':7,'str':3,'mov':3,'att':4,'def':3,'end':9,'spc':3},{'name':'Sullivan','alias':'Clover','rank':'Henchman','reputation':30,'funding':300,'crews':['bn'],'hates':[],'traits':['Bulletproof Vest','Rapid Fire','Veteran'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Clown','rank':'Henchman','reputation':14,'funding':0,'crews':['jk'],'hates':[],'traits':['Demential Laugh'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Clown','rank':'Henchman','reputation':15,'funding':0,'crews':['jk'],'hates':[],'traits':['Demential Laugh'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Clown','rank':'Henchman','reputation':16,'funding':0,'crews':['jk'],'hates':[],'traits':['Demential Laugh'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Edward Blake','alias':'Comedian','rank':'Watchmen','reputation':75,'funding':0,'crews':['wm'],'hates':[],'traits':['Demential Laugh','Shooter','Dirty Fighter','Psycho','Hardened','Veteran','Watchmen'],'wp':7,'str':4,'mov':2,'att':4,'def':3,'end':9,'spc':3},{'name':'James W. Gordon','alias':'Gordon','rank':[{'crew':'lf','rank':'Leader'},{'crew':'bt','rank':'Sidekick'}],'reputation':70,'funding':200,'crews':['bt','lf'],'hates':[],'traits':['Kevlar Vest','Air Support','Arrest','Detective','Veteran','Take Cover!!',{'name':'Elite Boss','type':''}],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Gillian B. Loeb','alias':'Commissioner Loeb','rank':[{'crew':'lf','rank':'Leader'},{'crew':'bm','rank':'Sidekick'},{'crew':'oc','rank':'Sidekick'},{'crew':'tf','rank':'Sidekick'}],'reputation':70,'funding':0,'crews':['lf','oc'],'hates':[],'traits':['Public Resources','Commissioner','Corrupt','Discourage','Kill Them!','Mob','Persuasive','Veteran',{'name':'Elite Boss','type':''}],'wp':7,'str':6,'mov':1,'att':3,'def':3,'end':7,'spc':3},{'name':'Unknown','alias':'Conqueror Penguin','rank':'Henchman','reputation':35,'funding':200,'crews':['pn'],'hates':[],'traits':['Power Strike','Football Gear','Veteran',{'name':'Elite','type':'Penguin'}],'wp':5,'str':4,'mov':2,'att':3,'def':4,'end':5,'spc':3},{'name':'Unknown','alias':'Contre-Auguste','rank':'Henchman','reputation':21,'funding':0,'crews':['jk'],'hates':[],'traits':['Obsessive','Hardened'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Copperhead','rank':'Free Agent','reputation':62,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Acrobat','Climbing Shoes','Stealth','Technique','Undercover'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':5,'spc':3},{'name':'Creeper Plant','alias':'Creeper Plant','rank':'Henchman','reputation':16,'funding':0,'crews':['pi'],'hates':[],'traits':['Plant',{'name':'Elite','type':'Plants'}],'wp':5,'str':4,'mov':0,'att':3,'def':3,'end':5,'spc':3},{'name':'Diaz','alias':'Cuchillo','rank':'Henchman','reputation':27,'funding':0,'crews':['bn'],'hates':[],'traits':['Bulletproof Vest','Sneak Attack','Stealth','Tireless','Veteran'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Victor Stone','alias':'Cyborg','rank':'Sidekick','reputation':123,'funding':500,'crews':['bt'],'hates':[],'traits':['Cybernetic','Fly','Night Vision','Hacking','Light Armor','Order',{'name':'Scheming','count':1}],'wp':8,'str':3,'mov':3,'att':4,'def':4,'end':9,'spc':3},{'name':'Unknown','alias':'Dallas','rank':'Henchman','reputation':35,'funding':600,'crews':['bn','ls'],'hates':[],'traits':['Mercenary','Veteran','Bulletproof Vest'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Floyd Lawton','alias':'Deadshot (AO)','rank':'Free Agent','reputation':76,'funding':300,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Expert Marksman','Rapid Fire','Night Vision','Dodge','Shooter'],'wp':6,'str':4,'mov':3,'att':4,'def':3,'end':6,'spc':3},{'name':'Floyd Lawton','alias':'Deadshot (Comic)','rank':'Free Agent','reputation':90,'funding':600,'crews':['*'],'hates':['bt','lf','ga','jk'],'traits':['Dodge','Obsessive','Ranged Master','Outlaw Field Commander',{'name':'Assassin','points':null}],'wp':7,'str':5,'mov':3,'att':3,'def':3,'end':7,'spc':3},{'name':'Floyd Lawton','alias':'Deadshot (Suicide Squad)','rank':'Free Agent','reputation':96,'funding':400,'crews':['*'],'hates':['bt','ga','lf'],'traits':['Kevlar Vest','Leadership','Ranged Master','Shooter','Suicide Squad Member','Bullet Time'],'wp':8,'str':4,'mov':3,'att':4,'def':4,'end':8,'spc':3},{'name':'Slade Wilson','alias':'Deathstroke (Comic)','rank':'Free Agent','reputation':122,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Sturdy','Master Marksman','Undercover','Precise Blow','Stealth','Resilient','Martial Artist'],'wp':7,'str':3,'mov':3,'att':5,'def':4,'end':8,'spc':3},{'name':'Slade Wilson','alias':'Deathstroke (AO)','rank':[{'crew':'sc','rank':'Sidekick'},{'crew':'*','rank':'Free Agent'}],'reputation':145,'funding':250,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Soul Armor','Acrobat','Undercover','Stealth',{'name':'Combo with','weapon':'Reinforced Bo'},'Martial Artist','Counter Attack'],'wp':7,'str':3,'mov':3,'att':5,'def':5,'end':8,'spc':3},{'name':'Unknown','alias':'Ded','rank':'Henchman','reputation':20,'funding':350,'crews':['tf'],'hates':[],'traits':['Gas Mask','Assault','Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Classified','alias':'Delta','rank':'Henchman','reputation':33,'funding':300,'crews':['bt','ga','lf'],'hates':[],'traits':['Lantern','Undercover','Bulletproof Vest',{'name':'Elite','type':'S.W.A.T.'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Chato Santana','alias':'Diablo (Suicide Squad)','rank':'Free Agent','reputation':50,'funding':200,'crews':['*'],'hates':['bt','ga','lf'],'traits':['Criminal','Dirty Fighter','Flaming Wave','Lantern','Suicide Squad Member','Magic Tattoos','Self-Discipline','Supernatural','Regrets'],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Dirty Tom','rank':'Henchman','reputation':32,'funding':350,'crews':['tf','oc','bm'],'hates':[],'traits':['Resilient','Criminal','Runaway',{'name':'Elite','type':'Gangster'}],'wp':5,'str':5,'mov':3,'att':4,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Dollotron 1','rank':'Henchman','reputation':0,'funding':0,'crews':[],'hates':[],'traits':['Desensitized','Stupid','Self-Discipline','Make them perfect','Creations of Perfection'],'wp':4,'str':4,'mov':2,'att':2,'def':1,'end':6,'spc':3},{'name':'Unknown','alias':'Echo','rank':'Henchman','reputation':26,'funding':0,'crews':['bt','ga','lf'],'hates':[],'traits':['Bulletproof Vest','Brutal','Veteran','Lethal Blow',{'name':'Elite','type':'S.W.A.T.'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Lester Buchinsky','alias':'Electrocutioner','rank':'Free Agent','reputation':40,'funding':0,'crews':['*'],'hates':[],'traits':['Criminal','Charismatic','EMP','Taunt','Electric Storm'],'wp':5,'str':4,'mov':2,'att':4,'def':3,'end':5,'spc':3},{'name':'Ignatius Ogilvy','alias':'Emperor Penguin','rank':'Leader','reputation':111,'funding':0,'crews':['pn'],'hates':[],'traits':['Dirty Money','Fast','Master Fighter','Regeneration',{'name':'Scheming','count':1},'Tough Skin'],'wp':7,'str':3,'mov':4,'att':4,'def':9,'end':null,'spc':3},{'name':'Mezz','alias':'EO474','rank':'Henchman','reputation':24,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Climbing Claws','Obsessive','Brutal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Irwin','alias':'EO475','rank':'Henchman','reputation':18,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Paranoid','Runaway'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Milo','alias':'EO476','rank':'Henchman','reputation':34,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Devastating Blow','Bipolar','Hardened'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Meatman','alias':'EO 477','rank':'Henchman','reputation':26,'funding':100,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Shooter','Bloodthirsty','Mobster'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Benton','alias':'EO478','rank':'Henchman','reputation':15,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Bloodthirsty','Stealth'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'File No 08923','rank':'Henchman','reputation':20,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Delirium','Aggressive Schizophrenia'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':6,'spc':3},{'name':'Garfield Lynns','alias':'Firefly','rank':'Free Agent','reputation':72,'funding':450,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Fly','Hover','Pyromania','Batcape','Handyman','Kevlar Vest'],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Barry Allen','alias':'Flash (Comic)','rank':'Sidekick','reputation':125,'funding':0,'crews':['bt'],'hates':[],'traits':[{'name':'Speedster','tokens':6},'Speed Force Master','Fast','Dodge','Detective','Scientific','Moral Compass'],'wp':8,'str':4,'mov':5,'att':3,'def':5,'end':7,'spc':4},{'name':'Barry Allen','alias':'Flash (CW)','rank':'Sidekick','reputation':100,'funding':0,'crews':['ga'],'hates':[],'traits':['Speed Force Master',{'name':'Speedster','tokens':5},'Fast','Dodge','Detective','Scientific','Moral Compass'],'wp':7,'str':4,'mov':4,'att':3,'def':5,'end':6,'spc':4},{'name':'Classified','alias':'GCPD Detective','rank':'Henchman','reputation':25,'funding':200,'crews':['bt','lf'],'hates':[],'traits':['Hidden','Arrest','Detective'],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Goat Head Priest','rank':'Henchman','reputation':35,'funding':400,'crews':['jk'],'hates':[],'traits':['Dirty Fighter','Anger Management',{'name':'Elite','type':'Cosplayers'}],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Goon','rank':'Henchman','reputation':16,'funding':0,'crews':['bm'],'hates':[],'traits':['Brutal'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Goon 2','rank':'Henchman','reputation':15,'funding':0,'crews':['bm'],'hates':[],'traits':['Brutal'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Felix Harmon','alias':'Gotham Butcher','rank':'Free Agent','reputation':81,'funding':0,'crews':['co'],'hates':[],'traits':['Weakness: Cold','Reanimated Owl','Large','Fast','Tough Skin','Brutal'],'wp':7,'str':3,'mov':3,'att':4,'def':3,'end':8,'spc':3},{'name':'Gotham Policeman','alias':'Gotham Policeman','rank':'Henchman','reputation':16,'funding':0,'crews':['bt','ga','lf'],'hates':[],'traits':['Arrest','Lantern'],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Gotham Policewoman','rank':'Henchman','reputation':14,'funding':0,'crews':['bt','ga','lf'],'hates':[],'traits':['Arrest'],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Oliver Queen','alias':'Green Arrow (Comic)','rank':'Sidekick','reputation':117,'funding':300,'crews':['bt','ga'],'hates':[],'traits':['Rapid Fire','Master Marksman','Acrobat','Good Aim','Hook Arrow','Technique','Hardened','Stealth','Adaptable'],'wp':7,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Oliver Queen','alias':'Green Arrow (TAS)','rank':'Leader','reputation':77,'funding':0,'crews':['ga'],'hates':[],'traits':['Good Aim',{'name':'Teamwork','counter':'2','target':'Black Canary'},'Rapid Fire','Sharpshooter','Acrobat'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Oliver Queen','alias':'Green Arrow (TDKR)','rank':'Leader','reputation':75,'funding':0,'crews':['ga'],'hates':[],'traits':['Acrobat','Hook Arrow','Desensitized','One-Armed','Ranged Master'],'wp':7,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Harley Gatling Brute','rank':'Henchman','reputation':49,'funding':850,'crews':['jk'],'hates':[],'traits':['Invaluable','Hardened','Ferocious','Large','Street Guy','Tireless'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (AC)','rank':'Sidekick','reputation':61,'funding':0,'crews':['jk'],'hates':[],'traits':['Acrobat','Disarray','Follow Me!','Technique',{'name':'True Love','love':'Joker'}],'wp':6,'str':5,'mov':4,'att':3,'def':4,'end':6,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (AK)','rank':'Leader','reputation':80,'funding':0,'crews':['jk'],'hates':[],'traits':['Bluff','Play Nice','Acrobat','Discourage','Mobster','Unpredictable','Escape Artist'],'wp':7,'str':5,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (Bombshell)','rank':'Sidekick','reputation':90,'funding':300,'crews':['jk'],'hates':[],'traits':['Acrobat','Charismatic','Confusion','Combat Flip','Goad','The Voices','Suicide Squad Member',{'name':'True Love','love':'Joker'}],'wp':6,'str':5,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (Comic)','rank':'Sidekick','reputation':75,'funding':0,'crews':['jk'],'hates':[],'traits':['Acrobat','360 Attack','Discourage','Distract','Fast',{'name':'True Love','love':'Joker'}],'wp':6,'str':5,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (Suicide Squad)','rank':'Sidekick','reputation':90,'funding':300,'crews':['jk'],'hates':[],'traits':['Acrobat','Charismatic','Confusion','Combat Flip','Goad','The Voices','Suicide Squad Member',{'name':'True Love','love':'Joker'}],'wp':6,'str':5,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Dr. Harleen Frances Quinzel','alias':'Harley Quinn (TAS)','rank':'Free Agent','reputation':40,'funding':200,'crews':['jk'],'hates':[],'traits':['Acrobat','Disarray','Distract','Follow Me!'],'wp':5,'str':6,'mov':4,'att':3,'def':4,'end':4,'spc':3},{'name':'Punker','alias':'Harley Thug 1','rank':'Henchman','reputation':30,'funding':300,'crews':['jk'],'hates':[],'traits':['Goad','Street Guy','Hardened'],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Bragg','alias':'Harley Thug 2','rank':'Henchman','reputation':21,'funding':200,'crews':['jk'],'hates':[],'traits':['Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Worker','alias':'Harley Thug 3','rank':'Henchman','reputation':21,'funding':0,'crews':['jk'],'hates':[],'traits':['Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Harley Thug 4','rank':'Henchman','reputation':16,'funding':0,'crews':['jk'],'hates':[],'traits':['Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Harley Thug 5','rank':'Henchman','reputation':22,'funding':250,'crews':['jk'],'hates':[],'traits':['Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Chencho','alias':'Harley Thug 6','rank':'Henchman','reputation':25,'funding':0,'crews':['jk'],'hates':[],'traits':['Street Guy',{'name':'Combo with','weapon':'Bat'},'Adaptable'],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':6,'spc':3},{'name':'Lumberjack','alias':'Harley Thug 7','rank':'Henchman','reputation':20,'funding':0,'crews':['jk'],'hates':[],'traits':['Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Harvey Bullock','alias':'Harvey Bullock','rank':'Sidekick','reputation':40,'funding':200,'crews':['lf'],'hates':[],'traits':['Arrest','Detective','Informer','Luck','Order'],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Kendra Saunders','alias':'Hawkgirl','rank':'Free Agent','reputation':99,'funding':0,'crews':['bt','ga'],'hates':[],'traits':['Fly','Hover',{'name':'Immune to','element':'Fire'},{'name':'Teamwork','counter':'2','target':'Hawkman'},'Flying High','Weapon Master','Unstoppable','Unnatural Flight'],'wp':7,'str':3,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Carter Hall','alias':'Hawkman','rank':'Free Agent','reputation':109,'funding':0,'crews':['bt','ga'],'hates':[],'traits':['Fly','Hover',{'name':'Immune to','element':'Fire'},{'name':'Teamwork','counter':'2','target':'Hawkgirl'},'Flying High','Savage Fighter','Hardened','Power Strike','Unnatural Flight'],'wp':7,'str':3,'mov':2,'att':4,'def':4,'end':9,'spc':3},{'name':'Mick Rory','alias':'Heat Wave','rank':'Free Agent','reputation':65,'funding':300,'crews':['*'],'hates':['bt','ga','lf','jk','ls'],'traits':['Criminal','Escape Artist','Runaway',{'name':'Teamwork','counter':'2','target':'Captain cold'},'Sturdy'],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':8,'spc':3},{'name':'Unknown','alias':'High Court Member','rank':'Leader','reputation':37,'funding':0,'crews':['co'],'hates':[],'traits':['Demoralize','Court of Owls Crew','Discourage','Distract',{'name':'Scheming','count':2}],'wp':5,'str':6,'mov':1,'att':2,'def':3,'end':7,'spc':3},{'name':'Classified','alias':'High Security Henchman','rank':'Henchman','reputation':48,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':[{'name':'Combo with','weapon':'Knifes'},'Devastating Blow','Criminal','Psycho'],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':8,'spc':3},{'name':'Alberto Falcone','alias':'The Holiday Killer','rank':'Sidekick','reputation':60,'funding':350,'crews':['oc'],'hates':[],'traits':[{'name':'Assassin','points':null},'Cruel','Stealth','Strategist','Hidden','The Holiday Killer'],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Hugo Strange','alias':'Hugo Strange','rank':'Free Agent','reputation':44,'funding':0,'crews':['bm','ls','oc','rd'],'hates':[],'traits':['Arkham Asylum Dr','Subliminal Suggestion','Psychiatrist','Persuasive','Psychologist'],'wp':6,'str':5,'mov':2,'att':2,'def':3,'end':6,'spc':3},{'name':'Helena Bertinelli','alias':'Huntress','rank':'Free Agent','reputation':66,'funding':100,'crews':['bt','ga'],'hates':[],'traits':['Rapid Fire','Acrobat','Distract','Runaway','Stealth','Martial Artist'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Thomas Elliot','alias':'Hush','rank':'Free Agent','reputation':73,'funding':350,'crews':['pi','jk','rd','sc'],'hates':[],'traits':['Exhaustive Planner','The Hidden Boss','Martial Artist','Master Marksman','Mastermind','Persuasive',{'name':'Scheming','count':3}],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Ice Penguin','rank':'Henchman','reputation':25,'funding':200,'crews':['pn'],'hates':[],'traits':['Criminal','Mobster'],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':4,'spc':3},{'name':'Jhonny-6','alias':'Jhonny-6','rank':'Henchman','reputation':45,'funding':0,'crews':['rd'],'hates':[],'traits':['Bodyguard','Bot','Desensitized','EMP'],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Joker (Arkham City)','rank':'Leader','reputation':105,'funding':0,'crews':['jk'],'hates':[],'traits':['Total Vision','Luck','Kaos Agent','One Shot Gun','Trickster','Poison Master'],'wp':8,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Joker (Jared Leto)','rank':'Leader','reputation':120,'funding':0,'crews':['jk'],'hates':[],'traits':['Dirty Money','Mobster','Kaos Agent','Follow Me!','Psycho','Survivor','Intimidate',{'name':'True Love','love':'Harley Quinn'},{'name':'Elite Boss','type':''}],'wp':8,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Joker (Killing Joke)','rank':'Leader','reputation':100,'funding':0,'crews':['jk'],'hates':[],'traits':['Kaos Agent','Intimidate','Demotivate','Kill Them!','Psycho',{'name':'Scheming','count':1},'Trickster'],'wp':8,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Joker (TDKR)','rank':'Leader','reputation':70,'funding':0,'crews':['jk'],'hates':[],'traits':['Kaos Agent','Trickster','Psycho','Target of the Bat',{'name':'Combo with','weapon':'Precise Knife'},'Cruel'],'wp':7,'str':4,'mov':2,'att':4,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Joker (Ledger)','rank':'Leader','reputation':90,'funding':0,'crews':['jk'],'hates':[],'traits':['Kaos Agent','Henchman Bomb','Luck','Undercover','Trickster','Psycho'],'wp':8,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Joker Titan AC','rank':'Leader','reputation':130,'funding':0,'crews':['jk'],'hates':[],'traits':['Power Strike','Large','Luck','Sturdy','Tireless','Trickster'],'wp':8,'str':2,'mov':3,'att':5,'def':3,'end':10,'spc':3},{'name':'Duela Dent','alias':'Joker\'s Daughter','rank':'Sidekick','reputation':60,'funding':100,'crews':['jk'],'hates':[],'traits':['Acrobat','Daddy\'s Grrrrl','Cruel','Discourage','Psycho','Detective'],'wp':6,'str':5,'mov':4,'att':3,'def':3,'end':6,'spc':3},{'name':'Tatsu Yamashiro','alias':'Katana','rank':'Free Agent','reputation':75,'funding':100,'crews':['ga','bt'],'hates':[],'traits':['Acrobat','Feint','Precise Blow','Adaptable','Martial Artist','Stealth'],'wp':6,'str':5,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'Tatsu Yamashiro','alias':'Katana (Suicide Squad)','rank':'Free Agent','reputation':50,'funding':0,'crews':['lf'],'hates':[],'traits':['Acrobat','Bodyguard','Martial Artist','Weapon Master','Suicide Squad Member','Volunteer'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Bart Allen','alias':'Kid Flash','rank':'Free Agent','reputation':74,'funding':0,'crews':['bt','ga','lf'],'hates':[],'traits':['Concealment','Dodge','Speed Force Master',{'name':'Speedster','tokens':4},'Dodge','Fast'],'wp':6,'str':5,'mov':4,'att':3,'def':4,'end':5,'spc':3},{'name':'Waylon Jones','alias':'Killer Croc','rank':'Free Agent','reputation':95,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Cannibal','Lord of the Sewer','Amphibious','Large','Superior Smell','Tough Skin'],'wp':7,'str':3,'mov':2,'att':5,'def':3,'end':9,'spc':3},{'name':'Waylon Jones','alias':'Killer Croc (Suicide Squad)','rank':'Free Agent','reputation':64,'funding':0,'crews':['*'],'hates':['bt','ga','lf'],'traits':['Amphibious','Ferocious','Tough Skin','Raised in the Sewers','Suicide Squad Member'],'wp':6,'str':4,'mov':3,'att':4,'def':3,'end':7,'spc':3},{'name':'Louise Lincoln','alias':'Killer Frost','rank':[{'crew':'mf','rank':'Sidekick'},{'crew':'*','rank':'Free Agent'}],'reputation':70,'funding':150,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Acrobat','Adaptable','Resilient','Runaway','Stop!'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':6,'spc':3},{'name':'Sandra Wu-San','alias':'Lady Shiva','rank':'Sidekick','reputation':85,'funding':0,'crews':['ls'],'hates':[],'traits':[{'name':'Combo with','weapon':'Unarmed'},'Acrobat','Adaptable','Martial Artist','Master Fighter','Stealth','Tracking'],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'League‘s Agent 1','rank':'Henchman','reputation':21,'funding':0,'crews':['ls'],'hates':[],'traits':['Sustained Defense','Martial Artist'],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'League‘s Agent 2','rank':'Henchman','reputation':20,'funding':100,'crews':['ls'],'hates':[],'traits':['Undercover','Martial Artist'],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'League‘s Agent 3','rank':'Henchman','reputation':23,'funding':0,'crews':['ls'],'hates':[],'traits':['Fast','Martial Artist'],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':4,'spc':3},{'name':'Howard Brandon','alias':'Lieutenant Branden','rank':'Sidekick','reputation':53,'funding':400,'crews':['lf','oc','bm','tf'],'hates':[],'traits':['Arrest','Lantern','Corrupt','Bulletproof Vest','Undercover','Veteran',{'name':'Elite Boss','type':''}],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Little Spark','rank':'Henchman','reputation':40,'funding':100,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Catcher Gear','Electric Storm','Handyman','Sturdy','Unpredictable'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Lobo','rank':'Free Agent','reputation':136,'funding':500,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Regeneration','Immortal','Brutal','Dirty Fighter','Master Fighter','Power Strike','Psycho','The Main Man'],'wp':8,'str':3,'mov':2,'att':5,'def':4,'end':9,'spc':3},{'name':'Unknown','alias':'Lotus','rank':'Henchman','reputation':48,'funding':100,'crews':['ls'],'hates':[],'traits':['Dodge','Rapid Fire','Reflexes','Martial Artist','Stealth',{'name':'Elite','type':'Ninja'}],'wp':6,'str':5,'mov':3,'att':3,'def':4,'end':6,'spc':3},{'name':'Dr. Jervis Tetch','alias':'Mad Hatter','rank':'Leader','reputation':75,'funding':0,'crews':['wg'],'hates':[],'traits':['Dodge','Handyman','Mastermind','Small','Weak','Charm','Mind Control Device'],'wp':8,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'None','alias':'Mary','rank':'Henchman','reputation':25,'funding':100,'crews':['jk'],'hates':[],'traits':['Bot','Fly','Funny Bomb','Safe Hands'],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':3,'spc':3},{'name':'Unknown','alias':'Master of Ceremonies','rank':'Henchman','reputation':36,'funding':0,'crews':['jk'],'hates':[],'traits':['Catcher Gear','Psycho','Elusive','Hardened',{'name':'Elite','type':'Circus'}],'wp':5,'str':4,'mov':2,'att':4,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'McGregor','rank':'Henchman','reputation':27,'funding':0,'crews':['bn','ls'],'hates':[],'traits':['Mercenary','Veteran','Bulletproof Vest',{'name':'Weapon Master With','weapon':'Machete'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Mesh','rank':'Henchman','reputation':22,'funding':600,'crews':['bm'],'hates':[],'traits':['Brutal'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Militia 1','rank':'Henchman','reputation':22,'funding':350,'crews':['sc'],'hates':[],'traits':['Shooter','Assault','Veteran'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Militia 2','rank':'Henchman','reputation':15,'funding':0,'crews':['sc'],'hates':[],'traits':['Veteran','Gas Mask'],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Militia 4','rank':'Henchman','reputation':29,'funding':500,'crews':['sc'],'hates':[],'traits':['Good Aim','Veteran'],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Militia Brute 1','rank':'Henchman','reputation':40,'funding':0,'crews':['sc'],'hates':[],'traits':['Gas Mask','Cybernetic','Light Armor','Sturdy','Large',{'name':'Elite','type':'Militia Brute'}],'wp':5,'str':4,'mov':1,'att':4,'def':2,'end':6,'spc':3},{'name':'Unknown','alias':'Militia Commander 1','rank':'Henchman','reputation':33,'funding':300,'crews':['sc'],'hates':[],'traits':['Expert Marksman','Kill Them!','Veteran'],'wp':5,'str':5,'mov':2,'att':4,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Militia Gatling Brute','rank':'Henchman','reputation':53,'funding':850,'crews':['sc'],'hates':[],'traits':['Cybernetic','Gas Mask','Invaluable','Large','Light Armor','Sturdy',{'name':'Elite','type':'Militia Brute'}],'wp':5,'str':5,'mov':1,'att':4,'def':2,'end':6,'spc':3},{'name':'Unknown','alias':'Militia Medic','rank':'Henchman','reputation':21,'funding':0,'crews':['sc'],'hates':[],'traits':['Medic','Veteran'],'wp':4,'str':5,'mov':2,'att':2,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Mohawk','rank':'Henchman','reputation':30,'funding':0,'crews':['bn','ls'],'hates':[],'traits':['Mercenary','Veteran','Bulletproof Vest',{'name':'Combo with','weapon':'Ice Axe'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Mottom','rank':'Henchman','reputation':27,'funding':0,'crews':['tf'],'hates':['lf','ga'],'traits':['Fast','Criminal'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Monster T.','rank':'Free Agent','reputation':40,'funding':200,'crews':['*'],'hates':['bt','ga','lf'],'traits':['Handsome Hunka Hunka','Disturb','Goad','Mobster'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Victor Fries','alias':'Mr Freeze','rank':'Free Agent','reputation':75,'funding':500,'crews':['*'],'hates':[],'traits':['Power Armor',{'name':'Primary Target','target':'Loot'},'Desensitized','Scientific',{'name':'Scheming','count':2}],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':6,'spc':4},{'name':'Victor Fries','alias':'Mr. Freeze (Arkham Knight)','rank':'Leader','reputation':80,'funding':0,'crews':['mf'],'hates':[],'traits':['Desensitized','Ice Flash','Light Armor','Safe Hands',{'name':'Scheming','count':3},'Scientific','Self-Discipline',{'name':'Vulnerability','element':'Fire'},'Power Armor MKII'],'wp':7,'str':4,'mov':2,'att':3,'def':4,'end':7,'spc':4},{'name':'Unknown','alias':'Mr. Grin (Black)','rank':'Henchman','reputation':17,'funding':0,'crews':['jk'],'hates':[],'traits':['Desensitized','Grin Twins',{'name':'Elite','type':'Cosplayers'}],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Unknown','alias':'Mr. Grin (White)','rank':'Henchman','reputation':19,'funding':0,'crews':['jk'],'hates':[],'traits':['Desensitized','Grin Twins',{'name':'Elite','type':'Cosplayers'}],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':4,'spc':3},{'name':'Abramovici','alias':'Mr. Hammer','rank':'Sidekick','reputation':71,'funding':0,'crews':['jk'],'hates':[],'traits':['Bodyguard','Lethal Blow','One-Armed','Large','Brutal',{'name':'Elite Boss','type':''}],'wp':6,'str':3,'mov':3,'att':5,'def':3,'end':8,'spc':3},{'name':'S.B.','alias':'Mr. Pink','rank':'Henchman','reputation':55,'funding':0,'crews':['oc','bm','tf'],'hates':[],'traits':['Bulletproof Vest','Rapid Fire',{'name':'Primary Target','target':'Loot'},'Runaway','Criminal','Informer'],'wp':6,'str':5,'mov':2,'att':3,'def':4,'end':6,'spc':3},{'name':'Unknown','alias':'Mule Goon','rank':'Henchman','reputation':27,'funding':0,'crews':['bm'],'hates':[],'traits':['Brutal','Sturdy','Veteran'],'wp':5,'str':4,'mov':2,'att':4,'def':2,'end':7,'spc':3},{'name':'Richard Grayson','alias':'Nightwing','rank':'Sidekick','reputation':85,'funding':0,'crews':['bt'],'hates':[],'traits':['Acrobat','Charismatic',{'name':'Combo with','weapon':'Electric Baton'},'Batclaw','Electric Storm','Explosive Gel','Sneak Attack'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Richard Grayson','alias':'Nightwing','rank':'Sidekick','reputation':95,'funding':0,'crews':['bt'],'hates':[],'traits':['Acrobat','Charismatic',{'name':'Combo with','weapon':'Electric Batons'},'Batclaw','Electric Storm','Agile','Reflexes',{'name':'Teamwork','counter':'1','target':'All'},'Heir to the Cowl'],'wp':7,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Daniel Dreiberg','alias':'Niteowl','rank':'Watchmen','reputation':50,'funding':0,'crews':['wm'],'hates':[],'traits':['Bonebreaker','Archie','Batcape','Arrest','Total Vision','Brutal','Watchmen'],'wp':6,'str':4,'mov':2,'att':3,'def':4,'end':6,'spc':3},{'name':'Nyssa Raatko','alias':'Nyssa al Ghul','rank':'Sidekick','reputation':83,'funding':300,'crews':['ls'],'hates':[],'traits':['Hook Arrow','Good Aim','Acrobat','Master Marksman','Reflexes','Stealth','Martial Artist',{'name':'Elite Boss','type':''}],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':7,'spc':3},{'name':'Brandon O‘Malley','alias':'O\'Malley‘s Father','rank':'Henchman','reputation':51,'funding':0,'crews':['co'],'hates':[],'traits':['Stealth','Tireless','Weakness: Cold','Reanimated Owl',{'name':'Assassin','points':null},'Brutal'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'James O‘Malley','alias':'O\'Malley‘s Grandfather','rank':'Henchman','reputation':33,'funding':0,'crews':['co'],'hates':[],'traits':['Bodyguard','Veteran','Weakness: Cold','Reanimated Owl','Martial Artist'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Nathaniel O‘Malley','alias':'O\'Malley‘Son','rank':'Henchman','reputation':30,'funding':0,'crews':['co'],'hates':[],'traits':['Martial Artist','Weakness: Cold','Reanimated Owl','Distract'],'wp':5,'str':4,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Adrian Alexander Veidt','alias':'Ozymandias','rank':'Watchmen','reputation':100,'funding':0,'crews':['wm'],'hates':[],'traits':['Acrobat','Reflexes','Mastermind','Great Strategist','Martial Artist','Watchmen'],'wp':8,'str':3,'mov':4,'att':4,'def':5,'end':8,'spc':3},{'name':'Unknown','alias':'Panda Man','rank':'Henchman','reputation':40,'funding':650,'crews':['jk'],'hates':[],'traits':['Hardened','Paranoid','Panda Costume',{'name':'Elite','type':'Cosplayers'}],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Pavilion A Subject','rank':'Henchman','reputation':10,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Delirium','Unpredictable'],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Pavilion B Subject','rank':'Henchman','reputation':13,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Delirium','Paranoid','Fast'],'wp':5,'str':4,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Oswald Chesterfield Cobblepot','alias':'Penguin (AC)','rank':'Leader','reputation':75,'funding':0,'crews':['pn'],'hates':[],'traits':['Lord of Business','Charismatic','Handyman','Bulletproof Vest','Mob','Persuasive','Small'],'wp':7,'str':5,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Oswald Chesterfield Cobblepot','alias':'Penguin (AK)','rank':'Leader','reputation':77,'funding':0,'crews':['pn'],'hates':[],'traits':['Lord of Business','Exhaustive Planner','Mob','Order','Pickpocket','Plead',{'name':'Primary Target','target':'Ammo Crates'},'Protect Me!','Small'],'wp':8,'str':5,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Oswald Chesterfield Cobblepot','alias':'Penguin (Gotham)','rank':[{'crew':'pn','rank':'Leader'},{'crew':'oc','rank':'Sidekick'}],'reputation':70,'funding':0,'crews':['pn'],'hates':[],'traits':['Boss\'s Orders','Survivor','Cruel','Distract','Luck','Mob','Persuasive',{'name':'Scheming','count':2},'Strategist'],'wp':7,'str':5,'mov':1,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Emperor Penguin','rank':'Henchman','reputation':31,'funding':0,'crews':['pn'],'hates':[],'traits':['Football Gear','Follow Me!',{'name':'Elite','type':'Penguin'}],'wp':5,'str':4,'mov':2,'att':3,'def':4,'end':5,'spc':3},{'name':'Big A.','alias':'Penguin Lieutenant','rank':'Henchman','reputation':50,'funding':0,'crews':['pn'],'hates':[],'traits':['Biker Jacket','Large','Mobster','Take Cover!!','Taunt'],'wp':5,'str':4,'mov':2,'att':4,'def':3,'end':7,'spc':3},{'name':'Plant','alias':'Plant','rank':'Henchman','reputation':10,'funding':0,'crews':['pi'],'hates':[],'traits':['Plant',{'name':'Elite','type':'Plants'}],'wp':4,'str':5,'mov':0,'att':3,'def':2,'end':4,'spc':3},{'name':'Dr. Pamela Lillian Isley','alias':'Poison Ivy (AC)','rank':'Leader','reputation':97,'funding':0,'crews':['pi'],'hates':[],'traits':['Mortal Kiss','Chlorokinesis','Control Pheromones',{'name':'Immune to','element':'Immunity'},'Scientific','Discourage',{'name':'Elite Boss','type':''}],'wp':8,'str':5,'mov':3,'att':3,'def':4,'end':8,'spc':4},{'name':'Dr. Pamela Lillian Isley','alias':'Poison Ivy (Comic)','rank':'Leader','reputation':83,'funding':0,'crews':['pi'],'hates':[],'traits':[{'name':'Immune to','element':'Immunity'},'Acrobat','Control Pheromones','Scientific','Confusion',{'name':'Elite Boss','type':''}],'wp':7,'str':4,'mov':4,'att':3,'def':4,'end':7,'spc':4},{'name':'Classified','alias':'Prisoner 01','rank':'Henchman','reputation':10,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Pickpocket'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':5,'spc':3},{'name':'Classified','alias':'Prisoner 02','rank':'Henchman','reputation':17,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Elusive','Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Prisoner 03','rank':'Henchman','reputation':19,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Criminal','Street Guy'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Prisoner 04','rank':'Henchman','reputation':18,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Bodyguard','Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Prisoner 05','rank':'Henchman','reputation':20,'funding':300,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Lantern','Criminal'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':5,'spc':3},{'name':'Lazlo Valentin','alias':'Proffesor Pyg','rank':'Free Agent','reputation':90,'funding':150,'crews':['*'],'hates':['bt','lf','ga'],'traits':[{'name':'Combo with','weapon':'Knife'},'Medic','Goad','Self-Discipline','Test Subjects','Dollotrons','Surgical Madness'],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Eobard Thawne','alias':'Professor Zoom','rank':'Free Agent','reputation':117,'funding':0,'crews':['*'],'hates':['bt','lf','ga','jk','ls'],'traits':['Dodge','Fast','Negative Speed Force',{'name':'Speedster','tokens':5},'Scientific','Strategist'],'wp':8,'str':4,'mov':5,'att':4,'def':5,'end':8,'spc':4},{'name':'L. Lawrence','alias':'Quick Responce Team 1','rank':'Henchman','reputation':27,'funding':100,'crews':['bt','lf','ga'],'hates':[],'traits':['Arrest','Bulletproof Vest'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Salvador','alias':'Quick Responce Team 2','rank':'Henchman','reputation':33,'funding':350,'crews':['bt','lf','ga'],'hates':[],'traits':['Bulletproof Vest','Street Guy'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Jenette Vassili','alias':'Quick Responce Team 3','rank':'Henchman','reputation':35,'funding':400,'crews':['bt','lf','ga'],'hates':[],'traits':['Bulletproof Vest','Radio','Tracking'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Josette','alias':'Quelle','rank':'Sidekick','reputation':45,'funding':200,'crews':['rd'],'hates':[],'traits':['Bipolar','Demotivate','Disarray','Undercover','Trickster'],'wp':6,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Alexander','alias':'Quiz 1','rank':'Henchman','reputation':33,'funding':350,'crews':['rd'],'hates':[],'traits':['Hardened','Rapid Fire'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Igor','alias':'Quiz 2','rank':'Henchman','reputation':15,'funding':0,'crews':['rd'],'hates':[],'traits':[{'name':'Combo with','weapon':'Riddler Knuckles'},'Combat Flip','Small'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'John Carrie','alias':'Quiz 3','rank':'Henchman','reputation':20,'funding':0,'crews':['rd'],'hates':[],'traits':[{'name':'Combo with','weapon':'Short Sickle'},'Distract'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Puooup','rank':'Henchman','reputation':15,'funding':0,'crews':['tf'],'hates':[],'traits':['Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Ra‘s Al Ghul','alias':'Ra\'s al Ghul (AC)','rank':'Leader','reputation':125,'funding':0,'crews':['ls'],'hates':[],'traits':[{'name':'Weapon Master With','weapon':'Soultaker Sword'},'Precise Blow','Immortal','Veteran','Undercover','Mastermind','Martial Artist','Grand Strategist',{'name':'Elite Boss','type':''}],'wp':8,'str':3,'mov':3,'att':4,'def':5,'end':9,'spc':3},{'name':'Ra‘s Al Ghul','alias':'Ra\'s al Ghul (Movie Neeson)','rank':'Leader','reputation':120,'funding':0,'crews':['ls'],'hates':[],'traits':[{'name':'Deathly Strike with','weapon':'Sword'},'Sustained Defense','Grand Strategist','Martial Artist','Mastermind','Immortal','Order','Persuasive',{'name':'Elite Boss','type':''}],'wp':8,'str':3,'mov':3,'att':5,'def':5,'end':8,'spc':3},{'name':'Rose Wilson','alias':'Ravager','rank':'Free Agent','reputation':75,'funding':0,'crews':['*'],'hates':['lf','ga'],'traits':['Power Dampening','Self-Discipline','Stealth','Weapon Master','Martial Artist'],'wp':6,'str':4,'mov':4,'att':4,'def':4,'end':6,'spc':3},{'name':'Benjamin Gruener','alias':'Reaper','rank':'Sidekick','reputation':70,'funding':0,'crews':['bm'],'hates':[],'traits':[{'name':'Assassin','points':null},'Brutal',{'name':'Combo with','weapon':'Sickle'},'Coward‘s Reward','Tireless','Stealth'],'wp':6,'str':4,'mov':2,'att':4,'def':4,'end':7,'spc':3},{'name':'Jason Todd','alias':'Red Hood AK','rank':'Free Agent','reputation':88,'funding':500,'crews':['bt'],'hates':[],'traits':[{'name':'Teamwork','counter':'1','target':'(All)'},'Take Cover!!','Safe Hands','Acrobat','Batclaw','Bulletproof Vest',{'name':'Scheming','count':1}],'wp':6,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Jason Todd','alias':'Red Hood (Comic)','rank':'Sidekick','reputation':105,'funding':400,'crews':['bt','oc'],'hates':[],'traits':['Acrobat','Gunman','Kevlar Vest','Instinctive Shooting','Agile','Martial Artist','Searcher','Shooter'],'wp':6,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Red Hood (Promotional)','rank':'Leader','reputation':105,'funding':0,'crews':['jk'],'hates':[],'traits':['Total Vision','Luck','Kaos Agent','One Shot Gun','Trickster','Poison Master'],'wp':8,'str':4,'mov':2,'att':4,'def':4,'end':8,'spc':3},{'name':'Eobard Thawne','alias':'Reverse Flash (CW)','rank':'Free Agent','reputation':110,'funding':0,'crews':['*'],'hates':['bt','lf','ga','jk','ls'],'traits':['Tachyon Device','I know what I\'m doing',{'name':'Speedster','tokens':5},'Dodge','Fast',{'name':'Scheming','count':2},'Scientific'],'wp':7,'str':4,'mov':5,'att':4,'def':5,'end':7,'spc':4},{'name':'Richard Rogers Flag','alias':'Rick Flag','rank':'Sidekick','reputation':64,'funding':500,'crews':['lf'],'hates':[],'traits':['Bulletproof Vest','Leadership','Multifire','Order','Veteran','Volunteer',{'name':'Elite Boss','type':''}],'wp':6,'str':4,'mov':3,'att':3,'def':4,'end':6,'spc':3},{'name':'Edward Nigma','alias':'Riddler AK','rank':'Leader','reputation':85,'funding':0,'crews':['rd'],'hates':[],'traits':['Bot Mechanic',{'name':'Can you Solve this?','weapon':'this'},'Objectives? Puzzles Everywhere!','Confusion','Distract','Handyman','Luck','Mastermind','Puzzle Master'],'wp':8,'str':5,'mov':3,'att':3,'def':3,'end':7,'spc':3},{'name':'Edward Nigma','alias':'Riddler\'s Mech','rank':'Leader','reputation':123,'funding':0,'crews':['rd'],'hates':[],'traits':['Bot Bomb','Energy Field',{'name':'Can you Solve this?','weapon':'this'},'Objectives? Puzzles Everywhere!','Cybernetic','Confusion','Large','Mastermind','Safe Hands'],'wp':8,'str':4,'mov':2,'att':4,'def':3,'end':9,'spc':3},{'name':'Unknown','alias':'Ringmaster','rank':'Henchman','reputation':28,'funding':0,'crews':['jk'],'hates':[],'traits':['360 Attack','Catcher Gear','Unpredictable',{'name':'Elite','type':'Circus'}],'wp':5,'str':4,'mov':2,'att':4,'def':3,'end':7,'spc':3},{'name':'Tim Drake','alias':'Robin (AC Drake)','rank':'Free Agent','reputation':68,'funding':200,'crews':['bt'],'hates':[],'traits':['Batclaw',{'name':'Combo with','weapon':'Bo'},'Follow Me!','Searcher','Detective'],'wp':6,'str':4,'mov':2,'att':3,'def':4,'end':6,'spc':3},{'name':'Tim Drake','alias':'Robin (AK Drake)','rank':'Sidekick','reputation':78,'funding':0,'crews':['bt'],'hates':[],'traits':['Batclaw',{'name':'Combo with','weapon':'Bo'},{'name':'Teamwork','counter':'2','target':'All'},'Detective','Undercover',{'name':'True Love','love':'Barbara Gordon'}],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Dick Grayson','alias':'Robin (Boy Wonder)','rank':'Sidekick','reputation':65,'funding':100,'crews':['bt'],'hates':[],'traits':['Acrobat','Agile','Batclaw','Combat Flip','Disarray','Escape Artist','Reflexes','Small','The Sidekick','Boy Wonder','Teen Titans Founder'],'wp':6,'str':5,'mov':4,'att':3,'def':5,'end':4,'spc':3},{'name':'Damian Wayne','alias':'Robin (Comic Damien)','rank':'Free Agent','reputation':50,'funding':0,'crews':['bt'],'hates':[],'traits':['Acrobat','Batclaw','Martial Artist','Technique','Master Fighter','Small','Detective',{'name':'True Love','love':'Batman'},{'name':'True Love','love':'Talia Al Ghul'}],'wp':5,'str':4,'mov':3,'att':4,'def':4,'end':5,'spc':3},{'name':'Carrie Kelley','alias':'Robin (TDKR)','rank':'Sidekick','reputation':54,'funding':100,'crews':['bt'],'hates':[],'traits':['Acrobat','Agile','Concealment','Handyman'],'wp':6,'str':5,'mov':4,'att':3,'def':4,'end':5,'spc':3},{'name':'Unknown','alias':'Ror','rank':'Henchman','reputation':26,'funding':500,'crews':['tf'],'hates':[],'traits':['Criminal','Gas Mask'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Walter Joseph Kovacs','alias':'Rorschach','rank':'Watchmen','reputation':75,'funding':0,'crews':['wm'],'hates':[],'traits':['Batclaw','Bloodthirsty','Detective','Hidden','Brutal','Watchmen'],'wp':7,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Rottor','rank':'Henchman','reputation':30,'funding':250,'crews':['tf'],'hates':[],'traits':['Hardened','Follow Me!','Criminal'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Royal Penguin','rank':'Henchman','reputation':24,'funding':600,'crews':['pn'],'hates':[],'traits':['Mobster','Street Guy'],'wp':4,'str':4,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Savage Penguin','rank':'Henchman','reputation':26,'funding':300,'crews':['pn'],'hates':['lf','ga'],'traits':['Stupid','Mobster'],'wp':5,'str':5,'mov':3,'att':4,'def':2,'end':5,'spc':3},{'name':'Jonathan Crane','alias':'Scarecrow (AC)','rank':'Free Agent','reputation':57,'funding':200,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Psychologist','Persuasive','Undercover'],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':6,'spc':3},{'name':'Jonathan Crane','alias':'Scarecrow AK','rank':'Leader','reputation':80,'funding':0,'crews':['sc'],'hates':[],'traits':['Gas Mask','Fear Master','Inspire Fear','Psycho','Undercover',{'name':'Scheming','count':1},'Psychologist','Discourage'],'wp':8,'str':4,'mov':2,'att':3,'def':4,'end':7,'spc':3},{'name':'Jonathan Crane','alias':'Scarecrow (DK Movie)','rank':'Free Agent','reputation':60,'funding':200,'crews':['ls'],'hates':[],'traits':['Death or Exile!','Follow Me!','Hidden','Psychologist'],'wp':6,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Ike','alias':'Schoolboy','rank':'Henchman','reputation':33,'funding':500,'crews':['bn'],'hates':[],'traits':['Gas Mask','Veteran',{'name':'Elite','type':'Soldier of Fortune'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Seeker','rank':'Henchman','reputation':27,'funding':200,'crews':['ls'],'hates':[],'traits':['Good Aim','Martial Artist','Stealth',{'name':'Elite','type':'Ninja'}],'wp':4,'str':5,'mov':3,'att':3,'def':4,'end':5,'spc':3},{'name':'Sgt Winslow','alias':'Sgt Winslow','rank':'Henchman','reputation':28,'funding':0,'crews':['lf'],'hates':[],'traits':['Lantern','Arrest','Order','Detective','Bulletproof Vest'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Shadow','rank':'Henchman','reputation':26,'funding':100,'crews':['ls'],'hates':[],'traits':['Martial Artist','Stealth','Undercover','Sneak Attack',{'name':'Elite','type':'Ninja'}],'wp':4,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'T.S.A.','alias':'Shadowstorm','rank':'Henchman','reputation':85,'funding':0,'crews':['ls'],'hates':[],'traits':['Acrobat','Fast','Reflexes','Stealth','Veteran',{'name':'Elite','type':'Ninja'}],'wp':6,'str':4,'mov':3,'att':5,'def':3,'end':6,'spc':3},{'name':'Abramovici','alias':'Sickle','rank':'Sidekick','reputation':67,'funding':0,'crews':['pn'],'hates':[],'traits':['360 Attack','Bodyguard','One-Armed','Brutal','Large',{'name':'Elite Boss','type':''}],'wp':6,'str':3,'mov':3,'att':5,'def':3,'end':8,'spc':3},{'name':'Laurie Juspeczyk','alias':'Silk Spectre II','rank':'Watchmen','reputation':50,'funding':0,'crews':['wm'],'hates':[],'traits':[{'name':'Combo with','weapon':'Unarmed'},'Acrobat','Counter Attack','Close Combat Master','Martial Artist','Watchmen'],'wp':6,'str':4,'mov':3,'att':4,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Six','rank':'Henchman','reputation':35,'funding':0,'crews':['jk'],'hates':[],'traits':['Let\'s Go!','Brutal','Psycho','Persuasive'],'wp':5,'str':4,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Christopher Weiss','alias':'Slipknot (Suicide Squad)','rank':'Free Agent','reputation':42,'funding':200,'crews':['*'],'hates':['bt','ga','lf','ls'],'traits':['Arrest','Grapple Gun','Bulletproof Vest','Suicide Squad Member'],'wp':5,'str':5,'mov':4,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Smash','rank':'Henchman','reputation':30,'funding':0,'crews':['bn','ls'],'hates':[],'traits':['Mercenary','Veteran','Bulletproof Vest'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Sniggering','rank':'Henchman','reputation':25,'funding':600,'crews':['jk'],'hates':[],'traits':['Informer'],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Snowy 1','rank':'Henchman','reputation':23,'funding':300,'crews':['mf'],'hates':[],'traits':['Hockey Gear'],'wp':4,'str':5,'mov':2,'att':2,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Snowy 2','rank':'Henchman','reputation':23,'funding':400,'crews':['mf'],'hates':[],'traits':['Hockey Gear'],'wp':4,'str':5,'mov':2,'att':2,'def':3,'end':5,'spc':3},{'name':'Unknown','alias':'Snowy 3','rank':'Henchman','reputation':24,'funding':0,'crews':['mf'],'hates':[],'traits':['Hockey Gear',{'name':'Combo with','weapon':'Hockey Stick'},'Radio'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Snowy 4','rank':'Henchman','reputation':24,'funding':300,'crews':['mf'],'hates':[],'traits':['Hockey Gear'],'wp':4,'str':5,'mov':2,'att':2,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Snowy 5','rank':'Henchman','reputation':28,'funding':0,'crews':['mf'],'hates':[],'traits':['Hockey Gear','Order','Bluff'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Cyrus Gold','alias':'Solomon Grundy','rank':'Free Agent','reputation':128,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Undead','Immortal','Large','Sturdy','Stupid','Brutal','Supernatural'],'wp':7,'str':2,'mov':2,'att':5,'def':3,'end':11,'spc':3},{'name':'Unknown','alias':'Son of Batman 01','rank':'Henchman','reputation':14,'funding':100,'crews':['bt'],'hates':[],'traits':['Hardened','Brutal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Son of Batman 02','rank':'Henchman','reputation':23,'funding':350,'crews':['bt'],'hates':[],'traits':['Hardened','Street Guy'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Son of Batman 03','rank':'Henchman','reputation':39,'funding':0,'crews':['bt'],'hates':[],'traits':['Bluff','Counter Attack','Follow Me!','Hardened'],'wp':5,'str':4,'mov':2,'att':3,'def':4,'end':6,'spc':3},{'name':'John Diggle','alias':'Spartan / Diggle (CW)','rank':'Henchman','reputation':60,'funding':350,'crews':['ga'],'hates':[],'traits':['Kevlar Vest','Bodyguard','Master Marksman',{'name':'Scheming','count':2},'Lantern'],'wp':6,'str':4,'mov':2,'att':4,'def':3,'end':7,'spc':3},{'name':'Unknown','alias':'Spice','rank':'Sidekick','reputation':69,'funding':0,'crews':['tf'],'hates':[],'traits':['Acrobat','Bodyguard','Weapon Master',{'name':'Teamwork','counter':'2','target':'Sugar'},'Runaway','Desensitized','Order',{'name':'True Love','love':'Dent'}],'wp':6,'str':4,'mov':4,'att':3,'def':4,'end':7,'spc':3},{'name':'Spore Plant','alias':'Spore Plant','rank':'Henchman','reputation':20,'funding':150,'crews':['pi'],'hates':[],'traits':['Plant',{'name':'Elite','type':'Plants'}],'wp':4,'str':5,'mov':0,'att':3,'def':2,'end':4,'spc':3},{'name':'Koriand‘r','alias':'Starfire','rank':'Free Agent','reputation':130,'funding':0,'crews':['bt'],'hates':[],'traits':['Fly','Flying High','Hover',{'name':'Invulnerability','counter':'2'},'Lantern','Safe Hands',{'name':'True Love','love':'Dick Grayson'}],'wp':7,'str':2,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'Grumble','alias':'Street Demonz 1','rank':'Henchman','reputation':29,'funding':150,'crews':['pn'],'hates':[],'traits':['Biker Jacket','Mine','Mobster'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Simmons','alias':'Street Demonz 2','rank':'Henchman','reputation':21,'funding':200,'crews':['pn'],'hates':[],'traits':['Biker Jacket','Shooter','Mobster'],'wp':4,'str':5,'mov':2,'att':2,'def':2,'end':5,'spc':3},{'name':'Reaver','alias':'Street Demonz 3','rank':'Henchman','reputation':20,'funding':0,'crews':['pn'],'hates':[],'traits':['Biker Jacket','Tireless','Mobster'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Mary Turner','alias':'Strix','rank':'Henchman','reputation':61,'funding':100,'crews':['co'],'hates':[],'traits':['Acrobat','Climbing Claws','Weakness: Cold','Reanimated Owl','Rapid Fire','Stealth'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'Alec Holland','alias':'Swamp Thing','rank':'Sidekick','reputation':150,'funding':0,'crews':['pi'],'hates':[],'traits':['Roots','Green Travel','Regeneration',{'name':'Vulnerability','element':'Fire'},'Scientific','Tough Skin','Supernatural','Immortal','Large',{'name':'Immune to','element':'Immunities'},'Pollution Hate',{'name':'Elite Boss','type':''}],'wp':8,'str':2,'mov':2,'att':4,'def':3,'end':11,'spc':4},{'name':'None','alias':'Talia al Ghul (AC)','rank':'Sidekick','reputation':71,'funding':0,'crews':['ls'],'hates':[],'traits':['Acrobat','Sneak Attack','Martial Artist',{'name':'True Love','love':'Bruce Wayne'},{'name':'Scheming','count':1},{'name':'Elite Boss','type':''}],'wp':6,'str':5,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'None','alias':'Talia al Ghul (Comic)','rank':'Sidekick','reputation':75,'funding':250,'crews':['ls'],'hates':[],'traits':['Business Agent','Get \'Em!','Acrobat','Master Marksman',{'name':'Scheming','count':3},{'name':'True Love','love':'Bruce Wayne'}],'wp':7,'str':5,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Unknown','alias':'Ted Hunter','rank':'Henchman','reputation':31,'funding':250,'crews':['bn','ls'],'hates':[],'traits':['Mercenary','Veteran','Bulletproof Vest'],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':5,'spc':3},{'name':'Luigi Lombardo','alias':'The Bull','rank':'Henchman','reputation':22,'funding':0,'crews':['oc','bm','tf'],'hates':[],'traits':['Close Combat Master','Criminal'],'wp':4,'str':4,'mov':2,'att':2,'def':2,'end':4,'spc':3},{'name':'Stan','alias':'The Eyeball Man','rank':'Henchman','reputation':27,'funding':350,'crews':['jk'],'hates':[],'traits':['Street Guy','Cyclops','OCD',{'name':'Elite','type':'Cosplayers'}],'wp':5,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Edward Nigma','alias':'The Riddler','rank':'Free Agent','reputation':69,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Confusion','Mastermind','Disarray','Puzzle Master','Trickster'],'wp':6,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Edward Nigma','alias':'The Riddler (Modern Age)','rank':'Leader','reputation':80,'funding':0,'crews':['rd'],'hates':[],'traits':['Wizard of Quiz','Quiz Master','A Challenge for you','Riddler Bots','Confusion','Goad','Mastermind','Puzzle Master'],'wp':8,'str':5,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Unknown','alias':'Titan Blue Penguin','rank':'Henchman','reputation':53,'funding':0,'crews':['pn'],'hates':[],'traits':['Large','Brutal','Sturdy','Stupid'],'wp':6,'str':3,'mov':2,'att':3,'def':3,'end':8,'spc':3},{'name':'Unknown','alias':'Titan Clown','rank':'Henchman','reputation':59,'funding':0,'crews':['jk'],'hates':[],'traits':['Sturdy','Stupid','Bloodthirsty','Large'],'wp':6,'str':3,'mov':2,'att':4,'def':2,'end':8,'spc':3},{'name':'Unknown','alias':'TNT','rank':'Henchman','reputation':43,'funding':600,'crews':['bn'],'hates':[],'traits':['Veteran','Order','Hardened','Flak Armor',{'name':'Elite','type':'Soldier of Fortune'}],'wp':5,'str':5,'mov':3,'att':3,'def':3,'end':6,'spc':3},{'name':'Unknown','alias':'Tot','rank':'Henchman','reputation':17,'funding':100,'crews':['tf'],'hates':[],'traits':['Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Triston','rank':'Henchman','reputation':26,'funding':300,'crews':['jk'],'hates':[],'traits':['Runaway','Dirty Fighter'],'wp':4,'str':5,'mov':2,'att':3,'def':3,'end':5,'spc':3},{'name':'Troy Santino','alias':'Troy Sins','rank':'Henchman','reputation':16,'funding':0,'crews':['oc','bm','tf'],'hates':[],'traits':['Criminal','Tireless'],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Classified','alias':'Turk','rank':'Henchman','reputation':25,'funding':400,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Gunman'],'wp':5,'str':5,'mov':2,'att':4,'def':2,'end':5,'spc':3},{'name':'Deever Tweet','alias':'Tweedledee','rank':'Henchman','reputation':30,'funding':300,'crews':['wg','jk'],'hates':[],'traits':['Bodyguard','Brutal','Distract',{'name':'Immune to','element':'Stunned Effect'},'Lazy Cousins'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Dumfree Tweet','alias':'Tweedledum','rank':'Henchman','reputation':38,'funding':600,'crews':['wg','jk'],'hates':[],'traits':['Bodyguard','Strategist',{'name':'Scheming','count':1},{'name':'Immune to','element':'Stun Effect'},'Lazy Cousins'],'wp':5,'str':5,'mov':2,'att':3,'def':3,'end':6,'spc':3},{'name':'Harvey Dent','alias':'Two Face','rank':'Leader','reputation':101,'funding':0,'crews':['tf'],'hates':[],'traits':['Judgement','Bipolar','Master Marksman','Attourney\'s Allegation','Runaway','Sturdy',{'name':'Elite Boss','type':''}],'wp':7,'str':4,'mov':2,'att':4,'def':4,'end':9,'spc':3},{'name':'Unknown','alias':'Twoowt','rank':'Henchman','reputation':12,'funding':0,'crews':['tf'],'hates':[],'traits':['Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3},{'name':'Unknown','alias':'Venom Soldier','rank':'Henchman','reputation':57,'funding':0,'crews':['bn'],'hates':[],'traits':['Bodyguard','Brutal','Large','Hardened',{'name':'Titan Dose','count':2}],'wp':6,'str':4,'mov':2,'att':3,'def':3,'end':7,'spc':3},{'name':'Samuel Hill','alias':'Vipera','rank':'Henchman','reputation':27,'funding':300,'crews':['oc','bm','tf'],'hates':[],'traits':['Criminal','Undercover',{'name':'Elite','type':'Gangster'}],'wp':4,'str':4,'mov':2,'att':3,'def':2,'end':4,'spc':3},{'name':'Unknown','alias':'Victor Zsasz','rank':'Free Agent','reputation':75,'funding':0,'crews':['*'],'hates':['bt','lf','ga'],'traits':['Deathmarks','Devastating Blow','Tension','Fast','Psycho','Unpredictable'],'wp':6,'str':4,'mov':4,'att':4,'def':4,'end':7,'spc':3},{'name':'Jaina Hudson','alias':'White Rabbit','rank':'Free Agent','reputation':55,'funding':0,'crews':['wg','bn'],'hates':[],'traits':['Acrobat','Bluff','Fast','Confusion','Escape Artist'],'wp':6,'str':5,'mov':4,'att':3,'def':4,'end':5,'spc':3},{'name':'William Cobb','alias':'William Cobb','rank':'Henchman','reputation':68,'funding':0,'crews':['co'],'hates':[],'traits':['Weakness: Cold','Reanimated Owl','Precise Blow',{'name':'Combo with','weapon':'Knife'},'Elusive','Martial Artist','Undercover'],'wp':7,'str':4,'mov':3,'att':4,'def':4,'end':7,'spc':3},{'name':'Xiao Loong','alias':'Xiao Loong','rank':'Henchman','reputation':49,'funding':0,'crews':['co'],'hates':[],'traits':['Talon','Weakness: Cold','Reanimated Owl','Martial Artist','Sneak Attack','Stealth'],'wp':6,'str':4,'mov':3,'att':4,'def':4,'end':6,'spc':3},{'name':'Unknown','alias':'Yang','rank':'Henchman','reputation':31,'funding':0,'crews':['ls'],'hates':[],'traits':[{'name':'Combo with','weapon':'Katana'},'Martial Artist','Stealth',{'name':'Elite','type':'Ninja'}],'wp':4,'str':5,'mov':3,'att':3,'def':4,'end':5,'spc':3},{'name':'Unknown','alias':'Ying','rank':'Henchman','reputation':30,'funding':0,'crews':['ls'],'hates':[],'traits':['Climbing Shoes','Martial Artist','Stealth','Hardened',{'name':'Elite','type':'Ninja'}],'wp':4,'str':5,'mov':3,'att':3,'def':4,'end':5,'spc':3},{'name':'Bruce Wayne','alias':'Zur-En-Arrh Batman','rank':'Leader','reputation':125,'funding':0,'crews':['bt'],'hates':[],'traits':['Bipolar','Kevlar Vest','Detective','Devastating Blow','Batclaw','Batcape'],'wp':6,'str':3,'mov':3,'att':6,'def':4,'end':8,'spc':3},{'name':'Unknown','alias':'Zwoowz','rank':'Henchman','reputation':20,'funding':400,'crews':['tf'],'hates':[],'traits':['Criminal'],'wp':4,'str':5,'mov':2,'att':3,'def':2,'end':5,'spc':3}];

/***/ },

/***/ 411:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var allCrews = exports.allCrews = [{
	  name: 'Batman',
	  id: 'bt'
	}, {
	  name: 'Green Arrow',
	  id: 'ga'
	}, {
	  name: 'Law Force',
	  id: 'lf'
	}, {
	  name: 'Joker',
	  id: 'jk'
	}, {
	  name: 'Penguin',
	  id: 'pn'
	}, {
	  name: 'League of Shadows',
	  id: 'ls'
	}, {
	  name: 'Bane',
	  id: 'bn'
	}, {
	  name: 'Poison Ivy',
	  id: 'pi'
	}, {
	  name: 'Court of Owls',
	  id: 'co'
	}, {
	  name: 'Mr. Freeze',
	  id: 'mf'
	}, {
	  name: 'Organized Crime',
	  id: 'oc'
	}, {
	  name: 'Two Face',
	  id: 'tf'
	}, {
	  name: 'Black Mask',
	  id: 'bm'
	}, {
	  name: 'Watchmen',
	  id: 'wm'
	}, {
	  name: 'Riddler',
	  id: 'rd'
	}, {
	  name: 'Scarecrow',
	  id: 'sc'
	}, {
	  name: 'Wonderland Gang',
	  id: 'wg'
	}, {
	  name: 'LexCorp',
	  id: 'lc'
	}, {
	  name: 'Gorilla Grodd',
	  id: 'gg'
	}, {
	  name: 'Suicide Squad',
	  id: 'ss',
	  roster: [{
	    name: 'Amanda Waller',
	    boss: 'always'
	  }, {
	    name: 'Black Manta',
	    boss: 'yes'
	  }, {
	    name: 'Black Spider',
	    boss: 'no'
	  }, {
	    name: 'Bronze Tiger',
	    boss: 'yes'
	  }, {
	    name: 'Captain Boomerang',
	    boss: 'yes'
	  }, {
	    name: 'Copperhead',
	    boss: 'no'
	  }, {
	    name: 'Deadshot',
	    boss: 'yes'
	  }, {
	    name: 'Deathstroke',
	    boss: 'yes'
	  }, {
	    name: 'Diablo',
	    boss: 'no'
	  }, {
	    name: 'The Riddler',
	    boss: 'no'
	  }, {
	    name: 'Gorilla Grodd',
	    boss: 'no'
	  }, {
	    name: 'Harley Quinn',
	    boss: 'yes'
	  }, {
	    name: 'Killer Frost',
	    boss: 'no'
	  }, {
	    name: 'King Shark',
	    boss: 'no'
	  }, {
	    name: 'Rick Flag',
	    boss: 'yes'
	  }, {
	    name: 'Joker\'s Daughter',
	    boss: 'no'
	  }, {
	    name: 'Katana',
	    boss: 'no'
	  }, {
	    name: 'Enchantress',
	    boss: 'no'
	  }, {
	    name: 'Killer Croc',
	    boss: 'no'
	  }, {
	    name: 'Slipknot',
	    boss: 'no'
	  }, {
	    name: 'Reverse Flash',
	    boss: 'no'
	  }]
	}, {
	  name: 'Teen Titans',
	  id: 'tt',
	  roster: [{
	    name: 'Nightwing',
	    boss: 'always'
	  }, {
	    name: 'Aqualad',
	    boss: 'no'
	  }, {
	    name: 'Batgirl',
	    boss: 'yes'
	  }, {
	    name: 'Bunker',
	    boss: 'no'
	  }, {
	    name: 'Cyborg',
	    boss: 'yes'
	  }, {
	    name: 'Robin (Damian Wayne)',
	    boss: 'no'
	  }, {
	    name: 'Hawk',
	    boss: 'no'
	  }, {
	    name: 'Dove',
	    boss: 'no'
	  }, {
	    name: 'Kid Flash',
	    boss: 'no'
	  }, {
	    name: 'Raven',
	    boss: 'no'
	  }, {
	    name: 'Red Hood',
	    boss: 'yes'
	  }, {
	    name: 'Robin (Boy Wonder)',
	    boss: 'yes'
	  }, {
	    name: 'Ravager',
	    boss: 'no'
	  }, {
	    name: 'Robin (Tim Drake)',
	    boss: 'yes'
	  }, {
	    name: 'Robin (Arkham Knight)',
	    boss: 'yes'
	  }, {
	    name: 'Arsenal',
	    boss: 'yes'
	  }, {
	    name: 'Starfire',
	    boss: 'no'
	  }, {
	    name: 'Superboy',
	    boss: 'no'
	  }, {
	    name: 'Supergirl',
	    boss: 'no'
	  }, {
	    name: 'Solstice',
	    boss: 'no'
	  }, {
	    name: 'Wonder Girl',
	    boss: 'yes'
	  }]
	}, {
	  name: 'Birds of Prey',
	  id: 'bp',
	  roster: [{
	    name: 'Black Canary',
	    boss: 'always'
	  }, {
	    name: 'Batgirl',
	    boss: 'yes'
	  }, {
	    name: 'Catwoman',
	    boss: 'no'
	  }, {
	    name: 'Dove',
	    boss: 'no'
	  }, {
	    name: 'Hawk',
	    boss: 'no'
	  }, {
	    name: 'Huntress',
	    boss: 'yes'
	  }, {
	    name: 'Katana',
	    boss: 'yes'
	  }, {
	    name: 'Lady Shiva',
	    boss: 'no'
	  }, {
	    name: 'Poison Ivy',
	    boss: 'no'
	  }, {
	    name: 'Strix',
	    boss: 'no'
	  }, {
	    name: 'Wildcat',
	    boss: 'no'
	  }, {
	    name: 'Starling',
	    boss: 'no'
	  }, {
	    name: 'Hawkgirl',
	    boss: 'no'
	  }, {
	    name: 'Hawkman',
	    boss: 'no'
	  }]
	}, {
	  name: 'Secret Six',
	  id: 'sx',
	  roster: [{
	    name: 'Catman',
	    boss: 'always'
	  }, {
	    name: 'Bane Origin',
	    boss: 'yes'
	  }, {
	    name: 'Black Alice',
	    boss: 'no'
	  }, {
	    name: 'Chesire',
	    boss: 'no'
	  }, {
	    name: 'Deadshot',
	    boss: 'no'
	  }, {
	    name: 'Harley Quinn',
	    boss: 'no'
	  }, {
	    name: 'King Shark',
	    boss: 'no'
	  }, {
	    name: 'Mad Hatter',
	    boss: 'no'
	  }, {
	    name: 'Parademon',
	    boss: 'no'
	  }, {
	    name: 'Ragdoll',
	    boss: 'no'
	  }, {
	    name: 'Scandal Savage',
	    boss: 'yes'
	  }, {
	    name: 'Strix',
	    boss: 'no'
	  }]
	}];
	
	// console.log(JSON.stringify(allCrews))

/***/ },

/***/ 412:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var allTraits = exports.allTraits = [{
	  'name': '360 Attack',
	  'phase': 'Execute the plan',
	  'cost': '1 SC + 1 AC',
	  'rule': 'Once per [Turn], this [Character] may [Attack], for free, all [Character]s in [Contact] with this [Character]. ',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Acrobat',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[BMD] and [Jump Capacity] become 12cm. The [Character] does not spend extra [MC] to [Move] through [Models], [Difficult Obstacles], [Difficult Ground], [Jump], or [Stand Up]. [Character] gains the [Dodge] trait.',
	  'grants': ['Dodge'],
	  'page': 'B.55'
	}, {
	  'name': 'Adaptable',
	  'phase': 'Raise/Execute the plan',
	  'cost': '',
	  'rule': 'At the beginning of your [Raise the Plan] Phase, you must declare [Move], [Attack], or [Defense]. Until the end of the [Round], this [Character] receives +1 to the chosen [Skill].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Addict',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may use a [Titan], [Venom], or [Vertigo] dose belonging to a [Friendly] [Character] in [Base-to-Base] contact as if it were their own.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Agile',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] [Falls], make an [Agility Roll]. If successful, this [Character] takes no [Damage], and are not [Knocked Down].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Air Support',
	  'phase': 'Execute the plan',
	  'cost': '3SC',
	  'rule': 'Place a 10cm [Explosion Template] in the [Play Area]. [Target]s within the [Template] are [Illuminated].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Assault',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Anger Management',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Amphibious',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] does not spend [MC] to [Move] through [Difficult Ground]: [Water]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Archie',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Do not [Deploy] Nite Owl during [Crew Deployment] of [Game Setup]. Instead, once per [Game] during [Raise the Plan], place Nite Owl anywhere on the [Play Area] not within a [Building].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Arkham Asylum Dr',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA',
	  'concern': true
	}, {
	  'name': 'Arrest',
	  'phase': 'Execute the plan',
	  'cost': '1SC+1MC',
	  'rule': 'Remove a [K.O.] [Character] in [Contact] as a [Casualty].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Arrogant',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Character] must have the highest [Reputation] in the [Crew].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Attourney\'s Allegation',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Game], every [Two Face] [Affiliated] [Henchman] located within 30cm of this [Character] [Assign]s two [Action Counters].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Assassin',
	  'nameFunc': 'Assassin/-points-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] kills an [Enemy] [Boss], immediately gain an extra -points- [Victory Point]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Autorepair',
	  'nameFunc': 'Autorepair/-target-',
	  'phase': 'Recovery phase',
	  'cost': '',
	  'rule': 'Roll a [Die] for this [Character] in the [Recovery Phase]. On a result of -target- +, remove any one [Damage] counter from this [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Aversion',
	  'nameFunc': 'Aversion to -character-',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Character] cannot be in the same [Crew] as -character-.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Assistance',
	  'phase': 'Raise the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA',
	  'concern': true
	}, {
	  'name': 'Backpack',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Bat-Armor MK 1',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Bat-Armor MK 2',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 6+, discard the [Hit].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bat-Armor MK III',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.',
	  'grants': [],
	  'page': 'F.26'
	}, {
	  'name': 'Batcape',
	  'phase': 'Execute the plan',
	  'cost': '1SC Passive',
	  'rule': 'When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Batclaw',
	  'phase': 'Execute the plan',
	  'cost': '1SC+1MC',
	  'rule': 'Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]',
	  'grants': [],
	  'page': 'B.56'
	}, {
	  'name': 'Batpod',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Biker Jacket',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores the [Weapon Trait]: [Sharp]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bipolar',
	  'phase': 'Raise the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'During [Raise the Plan], roll a die or flip a coin. If the result is Even/Heads, this [Character] [Allocate]s one additional [Action Counter]. If the result is Odd/Tails, this [Character] loses one [Action Counter].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bloodthirsty',
	  'phase': 'Raise the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'During [Raise the Plan] [Phase], if this character has at least one [Damage] of any kind, they [Allocate] 1 additional [AC].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bluff',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], reduce the [Attack Skill] of a [Seen] [Character] within 10cm by 1. This is not cumulative.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Play nice!',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All [Affiliated] [Henchmen] in this [Character]\'s [Crew] gain the [Bluff] [Trait].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bodyguard',
	  'phase': 'Execute the plan',
	  'cost': '1 SC Passive',
	  'rule': 'If a [Leader] or [Sidekick] within 5cm receives any number of [Hits], this [Character] may receive the [Hit] instead.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bonebreaker',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Until the end of the [Turn], [Unarmed Attack]s have [CRT]: 2 [Blood Damage]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Boss\'s Orders',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Round], while within 20cm of this [Character], all [Friendly] [Affiliated] [Henchman] in this [Character]\'s [Crew] gain +1 to [Hit Roll]s in [Melee].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bot',
	  'phase': 'Victory and Recovery',
	  'cost': '',
	  'rule': 'This [Character] does not [Recover] [Stun Damage] or from [K.O.] during the [Victory and Recovery Stage]. [Firearm], [Mechanic], and [Beam] [Weapons] [Damage] this [Character] on a 4+. This [Character] cannot use [Doses]. This [Character] is [Immune] to [Enervating], [Hypnotize], [Poison], [Terror], and [Scared] [Effects].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bot Bomb',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Round], this [Character] can choose a [Friendly] [Bot] to explode. Place an [Explosion Template] on the chosen [Bot]. Every [Character] touched by the [Template] takes a 2 [Blood Damage] hit on a 4+. Remove the [Target] [Bot] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bot Mechanic',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], [Target] [Seen] [Character] within 10cm with the [Bot] [Trait] has 3 [Damage] discarded.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Boy Wonder',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Brutal',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may reroll the [Collateral Die].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Bulletproof Vest',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Firearms require a 4+ to [Damage] this [Character].',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Bullet Time',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA',
	  'concern': true
	}, {
	  'name': 'Business Agent',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'Add $300 [Funding] to this [Character]\'s [Crew].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Can you Solve this?',
	  'nameFunc': 'Can you Solve this? / -target-',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], roll a [Die]. Rlace a [Friendly] [Clue Marker] on a -target- or better. See Flash and Arrow pg. 28 for more details.',
	  'grants': [],
	  'page': 'F.28'
	}, {
	  'name': 'Canary Cry',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Place the [Spray Template] in [Contact] with this [Character]. All [Character]s affected by the [Canary Cry] must pass a [Willpower Roll] or receive the [Stun Effect] and 1 [Blood Damage]. This [Attack] has the [Sonic] special rule.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Cannibal',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] is in [Contact] with a [K.O.] [Character], make a [Willpower Roll]. If they fail, gain the [Devour] trait. This [Character] may do nothing else until they have used [Devour] on the [K.O.] [Character], but may act normally afterward.',
	  'grants': ['Devour'],
	  'page': '?'
	}, {
	  'name': 'Deadly Strike',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Add [CRT]: [Casualty] to this [Attack].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Deathly Strike with',
	  'nameFunc': 'Deathly Strike with -weapon-',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Add [CRT]: [Casualty] to this [Attack]s with -weapon-.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Devour',
	  'phase': 'Execute the plan',
	  'cost': '2 Action Counter',
	  'rule': '[Character] in the [K.O.] state is [Removed] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Charge',
	  'phase': 'Execute the plan',
	  'cost': '1 MC + 1 SC',
	  'rule': 'When using this [Special Attack]; this [Character] must move in a straight line. While performing this move this [Character] can [Strike] (or [Push] without spending [SC]) any [Character]s in their path, displacing them just enough to pass. At the end of the [Movement], this [Character] can attack normally.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Catcher Gear',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may ignore the [Weapon Trait]s [Heavy] and [Tough].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Chain of Command',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Crew]\'s [Boss] becomes a [Casualty], this model may gain the [Leader] [Rank].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Charismatic',
	  'phase': '0.Crew Building',
	  'cost': '',
	  'rule': '[Crew]s that include this [Character] may have 1 [Free Agent] per every 100 [Reputation Points].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Charm',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Melee Attacks] fail to [Hit] this [Character] unless the [Attacker] passes a [Willpower Roll].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Chill Touch',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Unarmed Attacks] of this [Character] deail 1 [Blood] and have [CRT]: [Cooled].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Chlorokinesis',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], [Target] a [Character] with the [Plant] [Trait] within 10cm of [Ivy]. Place [Ivy] within 10cm of the [Target] [Plant].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Claybody',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Special Attack] [Charge] costs 1 [SC]. [Clayface] is [Immune] to the [Steal] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Claws',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Unarmed Attacks] produce [Blood] + [Stun] [Damage].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Climbing Shoes',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'AKA Climbing Claws. This [Character] does not spend MC to [Climb] and [Climbing Movement] is not [Impaired]. Spending 1 [SC], the character may finish their [Movement] while [Climbing].',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Climbing Claws',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'This [Character] does not spend MC to [Climb] and [Climbing Movement] is not [Impaired]. Spending 1 [SC], the character may finish their [Movement] while [Climbing].',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Climbing Rope',
	  'phase': 'Execute the plan',
	  'cost': '1SC Passive',
	  'rule': 'Duplicate of [Bat Cape]. When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].',
	  'grants': [],
	  'page': 'B.55'
	}, {
	  'name': 'Close Combat Master',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When fighting [Unarmed], the [Character] may reroll any number of [To [Hit]] dice.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Combat Flip',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], you may remove this [Character] from [Base to Base] contact with an [Enemy]. Place this [Character] within 5cm of the original [Enemy].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Combo with',
	  'nameFunc': 'Combo with: -weapon-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When attacking with -weapon-, gain 1 extra [Attack Dice] for every 2 [AC] spent.',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Commissioner',
	  'phase': 'Execute the plan',
	  'cost': '1 MC',
	  'rule': '[Arrest] by spending only 1 [MC].',
	  'grants': ['Arrest'],
	  'page': '?'
	}, {
	  'name': 'Combat Flip',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], this [Character] my be removed from [Base-to-Base] [Contact] with an [Enemy] [Character]. [Place] it anywhere within 5cm of the original [Enemy] [Character].',
	  'grants': ['Arrest'],
	  'page': '?'
	}, {
	  'name': 'Concealment',
	  'phase': 'Execute the plan',
	  'cost': '1 SC + 1 MC',
	  'rule': 'Until the end of the [Round], [Enemy] [Character]s my only see this [Character] if they are in [Base-to-Base] contact.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Confusion',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Turn], [Target] a [Seen] [Enemy Character] within 20cm. Recude the [Target]\'s [Attack] and [Defense] by 1 and they cannot use [SC]. These effects last until the end of the [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Control Pheromones',
	  'phase': 'Execute the plan',
	  'cost': '3 SC',
	  'rule': '[Target] a [Seen] [Enemy] [Character] within 10cm. The [Target] suffers the [Hypnotized] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Corrupt',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'Your [Crew] may [Recruit] up to 3 [Law Force] [Affiliated] [Henchmen].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Court of Owls Crew',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Crew] can only hire [Characters] with [Court of Owls] [Affiliation].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Coward\'s Reward',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Counter Attack',
	  'phase': 'Execute the plan',
	  'cost': '1SC Passive',
	  'rule': 'The first time this [Character] [Block]s any [Attack], they may spend 1 [SC] to immediately make one [Strike] against the [Attacker].',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Criminal',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Once per [Game], if this [Character] causes an [Enemy Character] to become [K.O.] or a [Casualty], gain +1 [Willpower].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Criminology',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All [Enemies] within 30cm of this [Character] lose the [Runaway] trait.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Cruel',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Remove a [K.O.] [Character] in [Contact] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Cybernetic',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] gets +1 to [Block] and [Recovery] rolls.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Cyclops',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] makes a [Ranged Attack] at an [Enemy] more than 20cm away, his [Weapons] gain the [Imprecise] rule.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Daddy\'s Grrrrl',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] [Activates] within 10cm of a [Friendly] [Joker] [Leader], [Assign] one [AC].',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Death or Exile!',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': '[Target] [Seen] [K.O.] [Character] within 20cm is [Removed] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Deathmarks',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Once per [Game], gain 1 [VP] if [Casualty] an [Enemy] [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Demotivate',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': '[Target] [Seen] [Character] within 20cm [Removes] 2 [Action Counter]s unless they pass a [Willpower Roll].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Demoralize',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'All [Seen] [Enemy] [Henchmen] lose 1 [Action Counter] of their choice.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Demential Laugh',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Once per [Round], reduce the [Defense] of [Target] [Seen] [Enemy] [Character] within 10cm by 1, to a minimum of 1 until the end of the [Round]. This [Effect] does not stack.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Delirium',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] cannot make [Recovery Rolls], or [Recover] from [K.O.].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Desensitized',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] takes damage, it does not reduce the number of [Action Counter]s generated.',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Detective',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'For each [Detective] [Character] in your [Crew], you may cancel an [Opponent]\'s [Pass] at the beginning of each [Round]. [Detective]s my reroll [Riddle Objectives] once.',
	  'grants': [],
	  'page': 'B.58'
	}, {
	  'name': 'Devastating Blow',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'When [Attacking], gain +1 to [Damage Rolls], and [CRT: Blood].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Direct Connection to the Speed Force',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can [Reroll] [Paradox] results.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Dirty Fighter',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Ranged Weapons] have the [Weapon Trait]: [Light]',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Dirty Money',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'If this [Character] is the [Boss], hiw [Crew] gains $300 extra [Funding].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Disarray',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], you may reallocate 2 [Action Counter]s of a [Seen] [Enemy] [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Discourage',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Turn], reduce the [Willpower] of a [Seen] [Enemy] [Character] by 2. This [Effect] lasts until the end of the next [Raise the Plan] phase.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Disruptor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA',
	  'concern': true
	}, {
	  'name': 'Distract',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], reduce the [Defense] of [Target] [Seen] [Enemy] [Character] within 10cm by 1, to a minimum of 1 until the end of the [Round]. This [Effect] does not stack.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Disturb',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Dodge',
	  'phase': 'Execute the plan',
	  'cost': '1MC (PASSIVE)',
	  'rule': 'This [Character] may spend [MC] to avoid [Ranged Attack Hits], before the [Attacker] makes its [Damage Rolls]. Each [Agility Test] [Success] cancels 1 [Hit].',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Duelist',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] is in [Contact] with only 1 [Enemy], this [Character] may [Reroll] [Failed] [Hits] in [Close Combat].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Echolocation',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Until the end of this [Round], this [Character] gains the [Night Vision] [Trait] and is [Immune] to the [Smoke] [Effect] and [Sneak Attack].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'ECM',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All sources of [Illumination] within 10cm of this [Character] are cancelled.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'EMP',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can reroll [Damage Roll]s against [Character]s with the [Cybernetic], [Bot], and [Robot] [Traits], and against [Models] with the [Vehicle] [Rank].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Electric Storm',
	  'phase': 'Execute the plan',
	  'cost': '3 SC + 1 AC',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Elite',
	  'nameFunc': 'Elite: -type-',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'Your [Crew] may only include 1 [Elite] of each type.',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Elite Boss',
	  'nameFunc': 'Elite Boss: (-type-)',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'Your crew may contain any number of [Elite]: -type-',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Elusive',
	  'phase': 'Execute the plan',
	  'cost': '1 MC Passive',
	  'rule': 'Once per [Round], this [Character] may spend 1 [MC] to get +1 to [Defense] against [Ranged Attack]s until the end of the [Round].',
	  'grants': [],
	  'page': 'B.59',
	  'concern': true
	}, {
	  'name': 'Escape Artist',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores [Special Attack]: [Grab].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Energy Field',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] is [Hit] by a [Ranged Attack], roll a [Die]. On a 5+, ignore the [Damage].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Enhanced Vision',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can see any distance, ignores the [Concealment] [Trait], and is [Immune] to the [Blind] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Experimental Ammo',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Ranged] [Weapons] cannot be [Reload]ed with [Ammo Crate] [Objective]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Expert Marksman',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': '[Target]s of this [Character]\'s [Ranged Attacks] have a -1 [Penalty] to [Ping! Rolls].',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Exhaustive Planner',
	  'phase': 'Game Setup',
	  'cost': '',
	  'rule': 'During [Game Setup], you may cancel one [Opponent]\'s [Strategy].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Expendable',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] does not give out [VP]s when [K.O.], but does award [VP] for becoming a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Explosive Gel',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may spend 1 [MC] to [Manipulate] a piece of [Urban Furnature]. Place a [Gel] marker on the [Urban Furnature]. In a future [Round] the Character may spend 1 [SC] to destroy the marked [Urban Furnature].',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Fast',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may reroll [MC] used to [Move].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Fear Master',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'When using [Inspire Fear], all [Character]s within 10cm are affected as a [Gas] [Attack].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Feral',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] gains +1 to hit when using [Close Combat]: [Grab]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Ferocious',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may [Close Combat Push] without spending [SC].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Feint',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Target an [Enemy] in [Contact] with this [Character]. Make an [Agility Roll]. If successful, [Target] loses 1 [DC].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Flak Armor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to [Damage] caused by [Weapons] with [Explosive] and [Expansive] [Weapon Traits].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Flare',
	  'phase': 'Execute the plan',
	  'cost': '1 MC',
	  'rule': 'Once per [Game], [Illuminate] the entire [Play Area] until the end of the [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Flaming Wave',
	  'phase': 'Execute the plan',
	  'cost': '3 SC',
	  'rule': 'This [Character] may make a Flaming Wave [Special Attack]. See Flash and Arrow pg.35',
	  'grants': [],
	  'page': 'F.35'
	}, {
	  'name': 'Fly',
	  'phase': 'Execute the plan',
	  'cost': '1 SC + 1 MC',
	  'rule': 'This [Character] can fly. See Flash & Arrow pg. 35',
	  'grants': [],
	  'page': 'F.35'
	}, {
	  'name': 'Flying High',
	  'phase': 'Execute the plan',
	  'cost': '3 SC + 1 MC',
	  'rule': 'Once per [Game], remove this [Character] from the [Play Area]. In the next [Raise the Plan] phase, [Place] this [Character] anywhere in the [Play Area].',
	  'grants': [],
	  'page': 'F.35'
	}, {
	  'name': 'Follow Me!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], assign 1 [MC] to [Friendly] [Henchmen] within 10cm.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Football Gear',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores the [Weapon Trait] [Heavy] and [Sharp].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Force Field',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': '[Target] [Friendly] [Character] in [Contact] with this [Character] gains a +4 [Ping!] until the end of the [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Funny Bomb',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Fully Equipped',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Gas Mask',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Gas] [Damage] and [Traits] are ignored.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Get \'Em!',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Target] [Seen] [Friendly] [Henchmen] within 20cm may immediately spend 1 [AC].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Goad',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Target 1 [Seen] [Enemy Character] within 20cm. The [Target] must make a [Willpower Roll]. If the [Target] fails, move the [Target] 5cm. You cannot force the [Target] to [Fall] or spend [Action Counters].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Good Aim',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'Spend 1 [SC]. This [Character] may [Move] and [Fire] a [Weapon] with the [Aim] rule.',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Great Strategist',
	  'phase': 'Strategies',
	  'cost': '',
	  'rule': 'This [Character]\'s [Crew] gets 2 additional [Strategy Point].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Grand Strategist',
	  'phase': 'Strategies',
	  'cost': '',
	  'rule': 'This [Character]\'s [Crew] gets 2 additional [Strategy Point].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Grapple Gun',
	  'phase': 'Execute the plan',
	  'cost': '1SC+1MC',
	  'rule': 'Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]',
	  'grants': [],
	  'page': 'B.56'
	}, {
	  'name': 'Green Travel',
	  'phase': 'Execute the plan',
	  'cost': '2 SC + 2 MC',
	  'rule': 'Once per [Game], [Place] this [Character] up to 40cm away',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Greed',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may only [Control] [Loot Objective]s and [Safe Box Objective]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Grin Twins',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Gunman',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] can spend 4 [AC] to [Attack] with 2 [Ranged Weapons] at once. Each [Attack] consumes an [Ammunition] from the [Weapon].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hacking',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Handsome Hunka Hunka',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Handyman',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] does not have to spend [MC] to [Manipulate].',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Hardened',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'The first [Blood Damage Marker] this [Character] receives each [Round] becomes a [Stun Damage Marker] instead.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Heavy Armor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Damage rolls against this [Character] suffer a -3 penalty.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Henchman Bomb',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Game], the [Joker] can choose one of his [Henchmen]. Place an [Explosion Tempalte] centered on the [Henchman]. Each [Character] touched by the [Template] take a 2+ [Damage] Roll. Then, the [Henchman] is removed as a [Casualty].',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Heir to the Cowl',
	  'phase': 'Crew creation',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Heroic',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], select any [Friendly] [Character] in the [Play Area]. That [Character] may assign 1 additional [Action Counter]. This may take your [Assigned] [Counters] over the [Character]\'s maximum.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hidden',
	  'phase': 'D.End',
	  'cost': '1 SC',
	  'rule': 'This [Character] may be deployed at the end of [Phase D] anywhere in the [Play Area]. This [Character] must not be [Seen] by [Enemy] [Character]s, and outside 10cm from any [Objective]. If this is not possible, then [Deploy] this [Character] in a [Friendly Deployment Zone]. If an [Enemy] [Character] has [Total Vision], this [Character] must be deployed in a [Friendly Deployment Zone].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'The Hidden Boss',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Crew]\'s [Leader] (not [Boss]) is removed as a [Casualty], this [Character] gains the [Leader] rank, and +1 [Willpower] until the end of the [Game].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hidden Boss',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Crew]\'s [Leader] (not [Boss]) is removed as a [Casualty], this [Character] gains the [Leader] rank, and +1 [Willpower] until the end of the [Game].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hockey Gear',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores the [Weapon Trait]: [Sharp]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hover',
	  'phase': 'Execute the plan',
	  'cost': '1 MC',
	  'rule': 'This [Character] is considered [Hovering] until the end of the [Round]. A [Hovering] [Character] can only be hit in [Melee] on a 6+. If a [Hovering] [Character] becomes [K.O.], [Knocked Down], [Paralyzed], [Pinned Down], or [Stunned]; take 2 additional [Blood Damage] and remove the [Hovering] [Effect]. [Hovering] [Characters] do not benefit from [Ping!].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Hook Arrow',
	  'phase': 'Execute the plan',
	  'cost': '1SC+1MC',
	  'rule': 'Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]',
	  'grants': [],
	  'page': 'B.56'
	}, {
	  'name': 'I know what I\'m doing',
	  'phase': 'Speed Force',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Immortal',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Removing this [Character] as a [Casualty] grants no additional [VP].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Incorporeal',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Until the end of the [Round], this [Character] ignores [Stun Damage] and may move through any [Model] or [Scenery], but may not end its move inside another object.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Ice Flash',
	  'phase': 'Execute the plan',
	  'cost': '3 SC',
	  'rule': 'Select a [Target] within 20cm and [Line of Sight]. The [Target] receives the [Cooled] [Effect]. This [Trait] may only be used once per [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Immune to',
	  'nameFunc': 'Immune to -element-',
	  'phase': 'Raise the plan',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to the [Fire] [Effect]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Informer',
	  'phase': 'Raise the plan',
	  'cost': '',
	  'rule': 'As long as this [Character] is [Active], you gain 1 additional [Pass].',
	  'grants': [],
	  'page': 'B.60'
	}, {
	  'name': 'Instinctive Shooting',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Until the end of the [Turn], this [Character] may use [Ranged Weapons] at full [Rate of Fire] for [Target]s within 5cm.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Inspire',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], [Henchmen] within 10cm [Assign] 1 [Action Counter].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Inspire Fear',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Turn], [Target] [Seen] [Enemy] [Character] within 10cm must pass a [Willpower Roll]. If the [Target] fails, compare the amount it failed by and resolve the effect: 1-2 - [Scared], 3-4 - [Scared] + [Terror] 1, 5-6 - [Scared] + [Terror] 2, 7 - [Scared] + [Terror] 3, 8+ - [Casualty] + 1 VP.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Intimidate',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': '[Target] [Seen] [Enemy] [Character] within 20cm cannot make [Close Combat] [Attacks] unless they pass a [Willpower Roll].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Invaluable',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is worth 1 extra VP if [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Invulnerability',
	  nameFunc: 'Invulnerability / -counter-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is immune to [CRT]: [Casualty] and ignores the first -counter- [Damage] received each round.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Joy for the Victory',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] is in play, this [Character]\'s [Crew] cannot be affected by the [Run Away] rule. Also, [Friendly] [Characters] within 20cm have -1 to their [Willpower Rolls].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Judgement',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] [K.O.]s an [Enemy] [Character], flip a [Coin] or roll a [Die]. If the result is Heads/Even, remove the [K.O.] [Character] as a [Casualty]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Jump-up',
	  'phase': 'Execute the plan',
	  'cost': '1 MC Passive',
	  'rule': 'If this [Character] is [Knocked Down], it may immediately stand up.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Ka-Pow!!!!!',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s unarmed attacks gain: [CRIT]: 3 [Stun]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Kaos Agent',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'At the beginning of the [Game], remove 1 [Opponent]\'s [Take the Lead] marker. [Game]s may now end before the [Scenario]\'s [Round Limit]. All [Henchmen] reveive the [Trickster] [Trait].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Kevlar Vest',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Reduce [Damage Markers] recieved by 1 to a minimum of 1.',
	  'grants': [],
	  'page': 'B.60'
	}, {
	  'name': 'Kill Them!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'All other [Friendly] [Henchmen] within 10cm of this [Character] gain 1 [AC]. This [AC] may take the number of [Action Counters] above a [Henchman]\'s normal maximum. This [Trait] may only be used once per [Round].',
	  'grants': [],
	  'page': 'B.59'
	}, {
	  'name': 'Lantern',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'If not in [Contact] with an [Enemy] [Character], everything within 5cm of this [Character] is [Illuminated].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Large',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Base Movement Distance] is 12cm. This [Character] may [Run] over [Small Obstacles], is damaged at 10cm when falling, cannot be [Pushed] or [Grabbed] unlesss the [Attacker] has the [Large] trait, and suffers -1 on [Ping!] tests.',
	  'grants': ['Resilient', 'Charge'],
	  'page': '?'
	}, {
	  'name': 'Laser Sight',
	  'phase': 'Execute the plan',
	  'cost': '1 MC',
	  'rule': 'Target one [Seen] [Character]. The [Target] [Character] is [Illuminated] until the end of the [Round]. If the [Target] can no longer be [Seen], the target is no longer [Illuminated].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Lazy Cousins',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'The [Willpower] of this [Character] is reduced by 1 if there are no other [Lazy Cousin]s in [Play].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Leadership',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All [Friendly Character]s within 20cm of this [Character] may reroll failed [Willpower Roll]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Lethal Blow',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'If this [Character] causes [Damage] to a [Target], that [Target] also suffers a [Stun] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Let\'s Go!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC Passive',
	  'rule': 'At the end of a [Friendly] [Henchman]\'s [Turn], a [Henchman] that has not yet had a [Turn] this [Round] may spend 1 [SC] to attempt to [Let\'s Go!]. [Roll] a [Die]. On a 4+, the [Henchman] that spent the [SC] may immediately take their [Turn]. If the roll is failed, no other [Henchman] may attempt to [Let\'s Go]. After this [Henchman]\'s [Turn], another friendly [Henchman] may attempt [Let\'s Go], but the difficulty is increased by one for each subsequent attempt.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Light Armor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Damage Roll]s against this [Character] suffer a -1 penalty.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Lord of Business',
	  'phase': 'Crew Building/D.Objectives',
	  'cost': '',
	  'rule': 'If this [Character] is the [Boss] of the [Crew], the [Crew] has $500 more [Funding] to spend. The [Crew] may take an extra [Loot Objective] instead of another [Objective].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Lord of the Sewer',
	  'phase': '????',
	  'cost': '',
	  'rule': '[Killer Croc] does not count toward the limit of [Characters] tha can be in the [Sewer]. [Killer Croc] can start the game inside the [Sewer], but must remain in the [Sewer] for one [Round]. [Killer Croc]\'s [Crew] generates 1 additional [Sewer Marker].',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Luck',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] may spend 1 [SC] to [Reroll] any [Die] for any reason. This [Character] may also spend 1 [SC] per [Hit] to force an [Enemy] to [Reroll] successful [Hits] against this [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Lunatic Laugh',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'All other [Characters] within 10cm lose 1 [Action Counter].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'The Main Man',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': '[Lobo] cannot be hired into [Crew]s which include a [Female] [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'The Man Without Fear',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to [Fear], [Scared], and [Terror] [Effect]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Magic Tattoos',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is immunte to [Steal] and [Fire] effects.',
	  'grants': [],
	  'page': 'F.39'
	}, {
	  'name': 'Martial Artist',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores [Outnumbered].',
	  'grants': [],
	  'page': 'B.62'
	}, {
	  'name': 'Martial Expert',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] causes a [Critical] on a [Collateral] of 4, 5, or 6.',
	  'grants': [],
	  'page': '?',
	  'concern': true
	}, {
	  'name': 'Master Fighter',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] gets a +1 bonus to its [Hit] rolls when making [Unarmed Attacks].',
	  'grants': [],
	  'page': 'B.62'
	}, {
	  'name': 'Master Marksman',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may reroll [To Hit Rolls] on [Ranged Attacks]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mastermind',
	  'phase': 'E, Execute the plan',
	  'cost': '',
	  'rule': 'Add 1 additional [Take the Lead] counter for your [Crew]. This [Character] can roll twice when solving [Riddles].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Maximum Efficiency',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] must gain 3 [VP] by the end of the [Game] or lose 1 [VP].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Medic',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'If this [Character] is in [Contact] with a [Friendly] [Character], remove one [Blood Damage] or 2 [Stun Damage]. This [Character] cannot [Medic] if an [Enemy] [Character] is in [Contact]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mercenary',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Character] may only be hired into the [Crew] if [Bane] or [Bird] are present.',
	  'grants': [],
	  'page': 'FAQ'
	}, {
	  'name': 'Aggressive Schizophrenia',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'If this [Character] begins its [Activation] in [Contact], assign 1 [Action Counter] and [Attack] a [Character] in [Contact] or take 1 [Blood Damage] at the end of the [Turn].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Menace',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Until the end of the [Round], [Enemy] [Character]s must spend an additional [Action Counter] to perform anyt [Attack] against this [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mental Dominance',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Turn], this [Character] can change the position of 4 [Action Counter]s of a [Seen] [Enemy] [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Millionaire',
	  'phase': 'Crew creation',
	  'cost': '',
	  'rule': 'Your [Crew] gains an additional $300 worth of [Funding] to spend on [Equipment].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mind Control',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Round], [Target] [Seen] [Enemy] [Character] within 20cm to suffer the [Hypnotize] effect. If the [Target] fails the [Willpower] roll, it also loses 1 [Action Counter] of the [Target]\'s choice.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mine',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Mind Control Device',
	  'phase': 'Execute the plan',
	  'cost': '3 SC',
	  'rule': 'Once per [Turn], [Target] [Seen] [Enemy] [Character] within 20cm must pass a [Willpower Roll] or suffer the [Hypnotized] [Effect]. If the [Target] becomes [Hypnotized], gain 1 [VP].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mob',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All [Henchmen] of this [Character]\'s [Crew] get +1 to their [Let\'s Go!] rolls.',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Mobster',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When [Attacking] a [Character] who is [Outnumbered], this [Character] gets an extra [Strike] against the [Target]. This [Attack] does not require any [AC].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Moral Compass',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'While this [Character] is in your [Crew], no [Character] may use [Coup de Grace]',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Mortal Kiss',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'If [Ivy] succeeds a [Special Attack]: [Grab] against a [Character], remove the [Target] [Character] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Monitoring Device',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] gains the [Total Vision] [Trait] and [Remote Controlled] on its [Ranged Weapons] until the end of the [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Multifire',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Spend 2 [SC]. This [Character] gains +2 to the [Rate of Fire] on its [Ranged Weapon]s. If this [Character] moves this [Turn], this bonus is lost.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Natural Immunities',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to [Blind], [Poison], and [Steal] [Effects].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Negative Speed Force',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] is in [Play], reduce the number of [Speed Force Counter]s generated by 2.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Night Vision',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can [See] any distance.',
	  'grants': [],
	  'page': 'B.62'
	}, {
	  'name': 'No Mercy!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Until the end of the [Round], [Black Mask] and all [Henchmen] have [CRT]: [Blood Damage].',
	  'grants': [],
	  'page': 'B.62'
	}, {
	  'name': 'Obstinate',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Other [Character]s may not change the allocation of [Action Counters] on this [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Objectives? Puzzles Everywhere!',
	  'phase': 'D.Objectives',
	  'cost': '',
	  'rule': 'This [Character]\'s [Crew] cannot deploy any [Objectives] during [Game Set Up]. This [Character]\'s [Crew] earns [VP] with [Clue Markers].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Obsessive',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'After this [Character] [Attacks] an [Enemy] [Character], they are unable to [Attack] any other [Target]s until that [Enemy] is [K.O.] or [Casualty]. This [Character] also gets +1 [Strength] against that [Enemy Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'One-Armed',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] has a -1 Penalty to [Defense Rolls].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'One Shot Gun',
	  'phase': 'Execute the plan',
	  'cost': '2 AC + 2 SC',
	  'rule': 'Once per [Game], make a [Short Range] [Ranged Attack]. The [Target] is automatically [Hit] with a [Strength 2+], 3 [Blood Damage] and [CRT]: [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Order',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Turn], [Seen] [Friendly] [Character] may reallocate up to 2 [Action Counter]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Military Tradition',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA',
	  concern: true
	}, {
	  'name': 'One of the Boys',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA',
	  concern: true
	}, {
	  'name': 'OCD',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Outlaw Field Commander',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Panda Costume',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Paranoid',
	  'phase': 'Raise the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'During [Raise the Plan], if this [Character] has 1 [Damage], they gain 1 free [DC]. This [DC] counts toward the total [DC] for that [Character].',
	  'grants': [],
	  'page': 'B.63'
	}, {
	  'name': 'Persuasive',
	  'phase': 'Execute the plan',
	  'cost': '1 SC + 1 AC',
	  'rule': 'Target a [Seen] [Enemy] [Character] that has not taken a [Turn] this [Round]. [Target] must immediately take their [Turn].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Pickpocket',
	  'phase': 'Execute the plan',
	  'cost': '1 MC',
	  'rule': 'If this [Character] uses [Manipulate] while in [Contact] with a [K.O.] [Character], they [Steal].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Plant',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'Up to 3 [Plants] may be [Recruited] per 200 [Reputation]. Place 2 [Seed Counters] in the [Play Area] for each [Plant] in your [Crew] after [Phase D Objectives]. At the beginning of the [Raise the Plan] [Phase], a [Seed Counter] may be replaced with a [Plant] [Character] that has not been [Deployed]. [Plants] cannot move. [Plants] may use [Melee Attacks] up to 10cm. Plants [Contest] [Objectives] up to 10cm away. [Plants] cannot [Control Objective]s, [Solve Riddles], or [Manipulate]. [Plants] are [Immune] to [Poison], [Blindness], and [Displace] unless they are [Displaced] by a [Large] [Character]. [Displaced] [Plants] are [Casualty]. Remove [Plants] as a 1 [VP] [Casualty] if they become [K.O.].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Play Nice',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'All [Affiliated] [Henchmen] in this [Crew] gain the [Bluff] [Trait].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Plead',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Poison Immunity',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This character ignores the [Poison] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Poison Master',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'To remove [Poison] [Effect] added by this [Character], the [Target] must roll 3 [Dice] and [Discard] the [Highest] [Die].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Pollution Hate',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] cannot enter the [Sewers].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Power Armor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores the first 3 [Damage] received. After taking 3 [Damage] the [Armor] is [Broken]. During the [Victory Point and Recovery State], this [Character] may use 2 [SC] to repair the armor. This armor is vulnerable to the [Fire] [Effect], taking 2 [Blood Damage] for each [Fire Marker].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Power Armor MKII',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is immune to [CRT].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Power Strike',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'If this [Character] [Hit]s the [Target], the [Target] is [Knocked Down] automatically.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Power Dampening',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'All [Characters] within 1cm lose the [Incorporeal] and [Invulnerability] [Trait] until the end of the [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Precise Aim',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'If this [Character] has not moved, gain +2 to hit on [Ranged Attacks] this [Turn]. This [Character] may not [Move] after using this [Skill].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Precise Blow',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] gets an additional +1 on the [To Hit Roll] and can reroll the [Collateral Die]. You must accept the second result.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Primary Target',
	  'nameFunc': 'Primary Target: -target-',
	  'phase': 'D.After Placement/VP Count',
	  'cost': '',
	  'rule': 'Before starting the game, choose 1 [-target-] [Objective]. At the end of each [Round] this [Character] controls that [Objective], gain 1 additional [VP].',
	  'grants': [],
	  'page': 'B.63'
	}, {
	  'name': 'Protect Me!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC Passive',
	  'rule': 'If this [Character] is hit by an [Attack], you may nominate a [Friendly] [Character] within 5cm to take the [Hit] instead. All [Effect]s and [Damage] will be taken by the nominated [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Psycho',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Willpower] is never reduced. This does not affect [Action Counters] lost from [Damage].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Psychiatrist',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], all [Henchmen] with [Mental Disorder]s gain +1 [Attack] and [Defense] until the end of the next [Raise the Plan] [Stage].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Psychoanalysis',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] may spend 1SC to cancel all [Mental Disorder] special rules of any [Characters] [Seen] within 20cm',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Psychologist',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] automatically solves [Riddle Objectives] for 1 VP, removing the [Riddle Objective] from the [Game]. Gain: [Psychoanalysis]',
	  'grants': ['Psychoanalysis'],
	  'page': '?'
	}, {
	  'name': 'Public Resources',
	  'phase': 'B.Urban Furnature',
	  'cost': '',
	  'rule': 'This [Character] adds 1 to [Lamp Post] and [Sewer] [Urban Furnature Rolls].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Puzzle Master',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] always scores 3 [VP] when solving [Riddle Objective Marker]s. Enemy [Character]s cannot reroll [Riddle Objective Marker]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Pyromania',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'At the beginning of this [Character]\'s [Turn], if this [Character] can [See] a [Character] with a [Fire Marker], this [Character] must move its full available [Movement] straight towards the [Target]. Spend 1 [Action Counter] to resist the urge.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Radio',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This model can reroll [Let\'s Go!] rolls.',
	  'grants': [],
	  'page': 'F.42'
	}, {
	  'name': 'Raised in the Sewers',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Ranged Master',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives +1 on [Ranged] [To Hit Roll]s.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Rapid Fire',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], when this [Character] uses a [Ranged Weapon], gain +1 [Rate of Fire] even if this [Character] moves.',
	  'grants': [],
	  'page': '?',
	  'concern': true
	}, {
	  'name': 'Reanimated Owl',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can reroll [K.O.] recovery. When this [Character] becomes a [Casualty], the opponent recieves 1 additional [VP].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Reflexes',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may reroll [Agility Roll]s',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Regeneration',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'At the start of this [Character]\'s [Turn], they may remove 1 [Damage Marker].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Regrets',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Quiz Master',
	  'phase': 'Objectives',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Riddler Bots',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'A Challenge for you',
	  'phase': 'Objectives',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Wizard of Quiz',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Reinforced Gloves',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Unarmed Attacks] produce 2 [Stun Damage].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Resilient',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may reroll [Endurance Rolls].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Retractable Claws',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [Unarmed] attacks inflict [Blood][Stun].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Revenge',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Ricochet',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Once per [Round], after this [Character] [Hits] with a [Ranged Attack], they may make an additional [Ranged Attack] with the same weapon. The new [Target] must have [Line of Sight] and be within 5cm of the original [Target].',
	  'grants': [],
	  'page': 'F.42',
	  'concern': true
	}, {
	  'name': 'Roots',
	  'phase': 'Execute the plan',
	  'cost': '2 SC',
	  'rule': 'Once per [Round], aftger this [Character] [Hits] with a [Ranged Attack], they may make an additional [Ranged Attack] with the same weapon. The new [Target] must be [Seen] and be within 5cm of the original [Target].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Runaway',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to the [Arrest] [Trait].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Safe Hands',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is immune to the [Steal] [Effect].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Savage Fighter',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] gains +1 to hit when attempting a [Push] [Attack] in [Close Combat].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Scheming',
	  'nameFunc': 'Scheming/-count-',
	  'phase': 'Raise the plan',
	  'cost': '',
	  'rule': 'If this [Character]\'s [Crew] is the first to [Raise the Plan], -count- [Character]s may be nominated to [Raise the Plan] after the opponent. Otherwise, you may reduce your [Opponent]s nominated [Characters] by -count-.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Scientific',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may assign 4 [SC]. This [Character] is worth 1 additional [VP] if removed as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Sealth',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'As long as this [Character] is [Active], you gain 1 additional [Pass].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Searcher',
	  'phase': 'A.Scenario Selection',
	  'cost': '',
	  'rule': 'Remote 1 [Strategy Point] from an [Opponent].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Self-Discipline',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may not be controlled by an [Opponent].',
	  'grants': [],
	  'page': 'F.42'
	}, {
	  'name': 'Sharpshooter',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores [Ping!] rolls.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Shooter',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] ignores the first [Obstacle], [Protective Item], and [Vehicle] for [Ping!] rolls.',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Small',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character]\'s [BMD] is 8cm. This [Character] gets +1 to [Ping!] rolls',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Sneaking',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Sneak Attack',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'This [Special Attack] my only be performed if the [Target] cannot see the [Attacker] at the beginning of the [Attacker]\'s activation. The [Target] cannot [Block] this [Special Attack].',
	  'grants': [],
	  'page': 'B.71'
	}, {
	  'name': 'Speed Force Master',
	  'phase': 'Speed Force',
	  'cost': '',
	  'rule': 'This [Character] may use up to 2 [Speed Force Powers] in a [Turn].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Speedster',
	  'nameFunc': 'Speedster/-tokens-',
	  'phase': 'Speed Force',
	  'cost': '',
	  'rule': 'This [Character] may take up to -tokens- Speed Force Tokens. [Melee Attacks] from this [Character] cannot be blocked unless the [Target] has the [Speedster] [Trait]. When this [Character] [Runs], it does not have to be in a straight line.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Stealth',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] is more than 20cm from an [Enemy], this [Character] cannot be [Seen]. Other rules override this effect (i.e. [Illumination], [Total Vision], etc).',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Stop!',
	  'phase': 'Execute the plan',
	  'cost': '1 SC Passive',
	  'rule': 'When a [Seen] [Enemy] [Character] begins its [Turn], spend 1 [SC]. The [Target] cannot spend [MC] for the remainder of the [Round].',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Strategist',
	  'phase': 'Strategies',
	  'cost': '',
	  'rule': 'This [Character]\'s [Crew] gets 1 additional [Strategy Point].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Street Guy',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can [Crouch] without spending [SC].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Stupid',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] cannot [Manipulate].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Sturdy',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] loses 1 [AC] for every 3 [Damage] instead of 2.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Subliminal Suggestion',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Target a [Character] with a [Mental Disorder] within 10cm, [Move] the [Character] up to 10cm. During this [Move], you cannot force the [Character] to [Fall] or spend [Action Counters].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Suicide Squad Member',
	  'phase': 'Build your crew',
	  'cost': '1 SC',
	  'rule': 'This [Character] may be part of the [Suicide Squad] team. See Flash pg. 68.',
	  'grants': [],
	  'page': 'F.68'
	}, {
	  'name': 'Superior Smell',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'This [Character] does not need [Line of Sight] to [See] his [Target]. Anything within 40cm can be [Seen] even if the [Target] is not [Illuminated]. This [Character] is also immune to the [Blind] effect.',
	  'grants': [],
	  'page': 'F.44'
	}, {
	  'name': 'Supernatural',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Attacks] made by this [Character] have the [Magic] [Weapon Trait].',
	  'grants': [],
	  'page': 'F.44'
	}, {
	  'name': 'Survivor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When you would [Remove] this [Character] as a [Casualty], roll a die. On a 5+, this [Character] discards 1 [Damage], and remains in the [Playing Area] [Knocked Down].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Sustained Defense',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives 3 [Defense Dice] for every 2 [DC] spend [Defending] an [Attack].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Tachyon Device',
	  'phase': 'Speed Force',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Take Cover!!',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'Once per [Turn], [Henchmen] within 10cm of this [Character] assign 1 [DC].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Takedown',
	  'phase': 'Execute the plan',
	  'cost': '1 SC Passive',
	  'rule': 'When this [Character] causes a [K.O.] with an [Attack], you may spend 1 [SC] to remove the [K.O.] [Character] as a [Casualty].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Talon',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Taunt',
	  'phase': 'Execute the plan',
	  'cost': '1 SC',
	  'rule': 'Target [Seen] [Enemy] [Character] within 20cm, you may move up to 2 of the [Target]\'s [Action Counters] into [Attack].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Devastating',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': '[Attacks] with this [Weapon] roll 2 [Collateral Dice]. Both results apply.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Teamwork',
	  'nameFunc': 'Teamwork/-counter- -target-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'During -target- [Character]\'s turn, they may spend -counter- [Action Counters] of this [Character]\'s as long as they are within 10cm.',
	  'grants': [],
	  'page': 'F.44'
	}, {
	  'name': 'Tension',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives an additional +1 to his [Attack] and [Defence] values when he has at least 1 [Damage].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Technique',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'If this [Character] [Damages] an enemy with this [Close Combat] [Special Attack], the [Target] is [Knocked Down]. If the [Target] would be knocked down from [Collateral Damage], they suffer a hit at [Strength 4+] and suffer 1 [Stun].',
	  'grants': [],
	  'page': 'B.65'
	}, {
	  'name': 'Teen Titans Founder',
	  'phase': 'Raise the plan/Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'The Dynamic Duo',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA',
	  'concern': true
	}, {
	  'name': 'The Sidekick',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'See this [Character]\'s card',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Thief',
	  'phase': 'Execute the plan',
	  'cost': '1SC',
	  'rule': 'When a [Enemy Model] is [Hit] by this [Close Combat] [Special Attack], the [Attacker] gains [CRT]: [Steal].',
	  'grants': [],
	  'page': 'B.71'
	}, {
	  'name': 'Tireless',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] may [Run] by spending only 1 [SC]',
	  'grants': [],
	  'page': '?',
	  'concern': true
	}, {
	  'name': 'Titan Addict',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can use a [Titan Dose] more than once per [Game], but no more than once per [Round]. If, at the beginning of this [Character]\'s [Turn], this [Character] can [See] a [Titan Container Objective], he must move all available movement in a straight line to the [Titan Container Objective]. This [Character] can resist this by spending 1 [Action Counter].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Titan Dose',
	  'nameFunc': '-count- Titan Dose',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Once per [Round] during the [Raise the Plan] phase, this [Character] may consume 1 of -count- [Titan Dose](s) to gain +1 to all [Characteristics] during this [Round].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Total Vision',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] benefits from the [Night Vision] Trait and can see through [Obstacles] or [Terrain]. The [Character] may not shoot through these elements unless the [Weapon] has [Remote Control].',
	  'grants': ['Night Vision'],
	  'page': 'B.66'
	}, {
	  'name': 'Tough Skin',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Subtract 1 from [Damage Roll]s made against this [Character].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Target of the Bat',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Tracking',
	  'phase': 'VP and Casualty',
	  'cost': '2SC',
	  'rule': 'At the end of the [VP and Casualty] phase, this [Character] can move up to 2D6 cm.',
	  'grants': [],
	  'page': 'F.44'
	}, {
	  'name': 'Trickster',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'At the start of this [Character]\'s [Turn], they may reallocate all of their [Action Counters].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'True Love',
	  'nameFunc': 'True Love: -love-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If the [Character] and -love- are in the same [Crew], and -love- is removed as a casualty, this [Character] gains +1 [Willpower] and +1 [Attack] ([Stacking]) until the end of the game.',
	  'grants': [],
	  'page': 'B.66'
	}, {
	  'name': 'Undead',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] is [Immune] to [Effects] execpt [Knock Down] and [Smoke].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Undercover',
	  'phase': 'C.Crew Deployment',
	  'cost': '',
	  'rule': 'This [Character] can deploy up to 20cm outside the [Deployment Area] after [Phase D: Objectives].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Unpredictable',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] can use any allocated [SC] for any [Trait], [Skill], or [Special Rule]. These [Counters] do not count against the maximum allowed for the [Characteristic] used.',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Unstoppable',
	  'phase': 'C.Crew Deployment',
	  'cost': '1 SC',
	  'rule': 'Each [Strike] this [Character] makes this [Turn] requires 2 successful [Blocks] to [Defend].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'The Holiday Killer',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'The Untouchable',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Unnatural Flight',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'During the [Round] in which this [Character] retuns to the [Play Area] due to the [Flying High] [Trait], its [Base Movement Distance] becomes 0 and cannot use the [Fly] [Trait].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Venom Dose',
	  'nameFunc': '-count- Venom Dose',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'Once per [Round] during the [Raise the Plan] phase, this [Character] may consume 1 of -count- Venom Dose(s) to gain +1 [Strength] and can reroll [Unarmed Damage Rolls].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Veteran',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'When this [Character] is [Activated], they may reassign 2 [Action Counters].',
	  'grants': [],
	  'page': 'B.66'
	}, {
	  'name': 'The Voices',
	  'phase': 'Execute the plan',
	  'cost': 'Mental Disorder',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Soul Armor',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Dollotrons',
	  'phase': '???',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Surgical Madness',
	  'phase': '???',
	  'cost': 'Mental Disorder',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Test Subjects',
	  'phase': '???',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Volunteer',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'TBD...',
	  'grants': [],
	  'page': '?',
	  concern: true
	}, {
	  'name': 'Vulnerability',
	  'nameFunc': 'Vulnerability to -element-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives 2 [Blood Damage] for every [-element- Marker].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Vanish',
	  'phase': 'Execute the plan',
	  'cost': '1 MC + 2 SC',
	  'rule': 'See this [Character]\'s card.',
	  'grants': [],
	  'page': 'NA'
	}, {
	  'name': 'Watchmen',
	  'phase': 'Crew Building',
	  'cost': '',
	  'rule': 'This [Character] can only be [Affiliated] with other [Character]s with the [Watchmen] [Rank].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Weakness: Cold',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'If this [Character] receives the [Cooled] or [Freeze] [Effect], they receive 1 [Blood Damage] as well.',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Weak',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This  [Character] loses 1 [Action Counter] for each [Damage Marker] accumulated',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Weapon Master',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives +1 on melee [To Hit Rolls] when they are not [Unarmed].',
	  'grants': [],
	  'page': '?'
	}, {
	  'name': 'Weapon Master With',
	  'nameFunc': 'Weapon Master: -weapon-',
	  'phase': 'Execute the plan',
	  'cost': '',
	  'rule': 'This [Character] receives +1 on melee [To Hit Rolls] when [Attacking] with -weapon-.',
	  'grants': [],
	  'page': '?'
	}];

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RapSheet = __webpack_require__(414);
	
	var _RapSheet2 = _interopRequireDefault(_RapSheet);
	
	var _SelectHeader = __webpack_require__(421);
	
	var _SelectHeader2 = _interopRequireDefault(_SelectHeader);
	
	var _Character = __webpack_require__(424);
	
	var _Character2 = _interopRequireDefault(_Character);
	
	__webpack_require__(427);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Builder = function (_React$Component) {
	  (0, _inherits3.default)(Builder, _React$Component);
	
	  function Builder() {
	    (0, _classCallCheck3.default)(this, Builder);
	    return (0, _possibleConstructorReturn3.default)(this, (Builder.__proto__ || (0, _getPrototypeOf2.default)(Builder)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Builder, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // Load up the various files
	      this.props.loadResources();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var availableCharacters = this.props.crew.availableCharacters;
	      return _react2.default.createElement(
	        'div',
	        { className: 'body-builder' },
	        _react2.default.createElement(_SelectHeader2.default, {
	          selectCrew: this.props.selectCrew,
	          addAllCharacters: this.props.addAllCharacters,
	          allCrews: this.props.crew.allCrews,
	          reputation: this.props.crew.reputation,
	          funding: this.props.crew.funding,
	          crewName: this.props.crew.crewName }),
	        _react2.default.createElement(
	          'div',
	          { className: 'whatsthisquestionmark' },
	          _react2.default.createElement(
	            'div',
	            { className: 'characters hidden-print' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Select Characters'
	            ),
	            _react2.default.createElement(
	              'div',
	              { id: 'available-characters', className: 'character-area' },
	              availableCharacters.map(function (character) {
	                return _react2.default.createElement(_Character2.default, { key: character.alias + '-' + character.name,
	                  character: character,
	                  selectCharacter: _this2.props.selectCharacter });
	              })
	            ),
	            _react2.default.createElement('div', { className: 'clear-left' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'crewStats hidden-print' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Current Crew'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Reputation: ',
	              this.props.crew.reputation,
	              ' - Funding: $',
	              this.props.crew.funding
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              'Leaders: ',
	              this.props.crew.leaders,
	              ' - Sidekicks: ',
	              this.props.crew.sidekicks,
	              '\xA0- Free Agents: ',
	              this.props.crew.freeAgents
	            ),
	            _react2.default.createElement(
	              'div',
	              { id: 'selected-characters', className: 'character-area' },
	              this.props.crew.characters.map(function (character) {
	                return _react2.default.createElement(_Character2.default, { key: character.alias,
	                  character: character,
	                  selectCharacter: _this2.props.selectCharacter });
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'rapSheets clear-left' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Rap Sheets'
	          ),
	          this.props.crew.characters.map(function (character) {
	            return _react2.default.createElement(_RapSheet2.default, { key: character.alias, character: character });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'rap-sheet-footer', className: 'hidden-print' },
	          _react2.default.createElement(
	            'p',
	            null,
	            '\xA9 TM \xA9 DC Comics. WB SHIELD: TM; Warner Bros. Entertainment. Inc. (s17). Copyright \xA9 2017 DC Comics. All characters, their distinctive likenesses and related elements featured in this publication are trademarks of DC Comics. Their stories, characters and incidents featured in this publication are entirely fictional.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Batman Miniature Game \xA92008-2017 KNIGHT MODELS - All Rights Reserved.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'RapSheet Builder \xA92017 David Springer'
	          )
	        )
	      );
	    }
	  }]);
	  return Builder;
	}(_react2.default.Component);
	
	Builder.propTypes = {
	  crew: _react2.default.PropTypes.object.isRequired,
	  selectCrew: _react2.default.PropTypes.func.isRequired,
	  selectCharacter: _react2.default.PropTypes.func.isRequired,
	  loadResources: _react2.default.PropTypes.func.isRequired,
	  addAllCharacters: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Builder;

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RapSheetTrait = __webpack_require__(415);
	
	var _RapSheetTrait2 = _interopRequireDefault(_RapSheetTrait);
	
	__webpack_require__(418);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RapSheet = function (_React$Component) {
	  (0, _inherits3.default)(RapSheet, _React$Component);
	
	  function RapSheet() {
	    (0, _classCallCheck3.default)(this, RapSheet);
	    return (0, _possibleConstructorReturn3.default)(this, (RapSheet.__proto__ || (0, _getPrototypeOf2.default)(RapSheet)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RapSheet, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'rapSheet hidden-print' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nameDiv' },
	            'Name: ',
	            this.props.character.name
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'aliasDiv' },
	            'Alias: ',
	            this.props.character.alias
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'traitArea' },
	            _react2.default.createElement(
	              'div',
	              null,
	              this.props.character.traitText.map(function (trait) {
	                return _react2.default.createElement(_RapSheetTrait2.default, { key: trait.name, trait: trait });
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'rapSheet visible-print-block printRapSheet' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nameDiv' },
	            'Name: ',
	            this.props.character.name
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'aliasDiv' },
	            'Alias: ',
	            this.props.character.alias
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'traitArea' },
	            _react2.default.createElement(
	              'div',
	              null,
	              this.props.character.traitText.map(function (trait) {
	                return _react2.default.createElement(_RapSheetTrait2.default, { key: trait.name, trait: trait });
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return RapSheet;
	}(_react2.default.Component);
	
	RapSheet.propTypes = {
	  character: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = RapSheet;

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(416);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RapSheet = function (_React$Component) {
	  (0, _inherits3.default)(RapSheet, _React$Component);
	
	  function RapSheet() {
	    (0, _classCallCheck3.default)(this, RapSheet);
	    return (0, _possibleConstructorReturn3.default)(this, (RapSheet.__proto__ || (0, _getPrototypeOf2.default)(RapSheet)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RapSheet, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'rapSheetTrait' },
	        _react2.default.createElement(
	          'div',
	          { className: 'traitHeader' },
	          _react2.default.createElement(
	            'div',
	            { className: 'traitName' },
	            this.props.trait.name,
	            ' ',
	            this.props.trait.cost
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'traitPhase' },
	            this.props.trait.phase
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'traitRule' },
	          this.props.trait.rule
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'pageNo' },
	          this.props.trait.page
	        )
	      );
	    }
	  }]);
	  return RapSheet;
	}(_react2.default.Component);
	
	RapSheet.propTypes = {
	  trait: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = RapSheet;

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(417);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(417, function() {
				var newContent = __webpack_require__(417);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".rapSheetTrait{width:100%;position:relative;margin:2px 0}.traitName{width:60%;float:left;font-weight:700}.traitPhase{margin-left:40%;text-align:right}.traitHeader{position:relative}.pageNo{text-align:right}", "", {"version":3,"sources":["/./src/routes/Builder/components/style/src/routes/Builder/components/style/RapSheetTrait.scss"],"names":[],"mappings":"AAAA,eACE,WAAW,kBACO,YACK,CACxB,WAGC,UAAU,WACC,eACM,CAClB,YAGC,gBAAgB,gBACC,CAClB,aAGC,iBAAkB,CACnB,QAGC,gBAAiB,CAClB","file":"RapSheetTrait.scss","sourcesContent":[".rapSheetTrait {\n  width: 100%;\n  position: relative;\n  margin: 2px 0px 2px 0px;\n}\n\n.traitName {\n  width: 60%;\n  float: left;\n  font-weight: bold;\n}\n\n.traitPhase {\n  margin-left: 40%;\n  text-align: right;\n}\n\n.traitHeader {\n  position: relative;\n}\n\n.pageNo {\n  text-align: right;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(419);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(419, function() {
				var newContent = __webpack_require__(419);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".rapSheet{font-family:CarbonType;font-size:75%;border:2px solid #000;text-align:left;position:relative;overflow:auto;padding:12px;margin:1em;page-break-inside:avoid}@font-face{font-family:CarbonType;src:url(" + __webpack_require__(420) + ")}.aliasDiv,.nameDiv{font-weight:700;font-size:110%}.printRapSheet{width:9cm!important;height:11cm!important;max-width:9cm!important;max-height:11cm!important;min-height:11cm!important;min-width:9cm!important;font-size:47%;overflow:hidden;float:left;margin:5px}", "", {"version":3,"sources":["/./src/routes/Builder/components/style/src/routes/Builder/components/style/RapSheet.scss"],"names":[],"mappings":"AAAA,UACE,uBAAyB,cACX,sBAEK,gBAEH,kBACE,cACJ,aACD,WACF,uBACa,CACzB,WAYC,uBAAyB,iCACkE,CAAA,mBAS3F,gBAAiB,cACF,CAChB,eAGC,oBAAqB,sBACE,wBACE,0BACE,0BACA,wBACF,cACX,gBACE,WACL,UACA,CACZ","file":"RapSheet.scss","sourcesContent":[".rapSheet {\n  font-family: 'CarbonType';\n  font-size: 75%;\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n  text-align: left;\n  position: relative;\n  overflow: auto;\n  padding: 12px;\n  margin: 1em;\n  page-break-inside: avoid;\n}\n\n/* I want to properly attribute the CarbonType font, so it is not included\n  in the CM for the project. To properly configure the font, do the following:\n\n  1. Go here and download the Webfont Kit:\n  https://www.fontsquirrel.com/fonts/CarbonType\n  2. Unzip the file into:\n  src/resources/fonts\n\n  That should be all to get it rolling.*/\n@font-face {\n  font-family: 'CarbonType';\n  src: url('../../../../resources/fonts/carbontype_regular_macroman/carbontype-webfont.woff')\n}\n\n.nameDiv {\n  font-weight: bold;\n  font-size: 110%;\n}\n\n.aliasDiv {\n  font-weight: bold;\n  font-size: 110%;\n}\n\n.printRapSheet {\n  width: 9cm !important;\n  height: 11cm !important;\n  max-width: 9cm !important;\n  max-height: 11cm !important;\n  min-height: 11cm !important;\n  min-width: 9cm !important;\n  font-size: 47%;\n  overflow: hidden;\n  float: left;\n  margin: 5px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/resources/fonts/carbontype_regular_macroman/carbontype-webfont.woff";

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(405);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(422);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SelectHeader = function (_React$Component) {
	  (0, _inherits3.default)(SelectHeader, _React$Component);
	
	  function SelectHeader() {
	    (0, _classCallCheck3.default)(this, SelectHeader);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectHeader.__proto__ || (0, _getPrototypeOf2.default)(SelectHeader)).call(this));
	
	    _this.state = { value: { name: 'default', id: '' } };
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.addAllCharactersClick = _this.addAllCharactersClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(SelectHeader, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var newVal = JSON.parse(event.target.value);
	      this.state = newVal;
	      this.props.selectCrew(newVal);
	    }
	  }, {
	    key: 'addAllCharactersClick',
	    value: function addAllCharactersClick(event) {
	      this.props.addAllCharacters();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container selectHeader hidden-print' },
	        _react2.default.createElement(
	          'select',
	          { id: 'crewSelect', value: this.state.value, onChange: this.handleChange },
	          _react2.default.createElement(
	            'option',
	            { key: 'default', value: '{name:"default", id:""}' },
	            'default'
	          ),
	          this.props.allCrews.map(function (crew) {
	            return _react2.default.createElement(
	              'option',
	              { key: crew.id, value: (0, _stringify2.default)(crew) },
	              crew.name
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.addAllCharactersClick },
	          'Add All'
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'crewStats' },
	          _react2.default.createElement(
	            'label',
	            { className: 'statLabel' },
	            'Rep: ',
	            this.props.reputation
	          ),
	          _react2.default.createElement(
	            'label',
	            { className: 'statLabel' },
	            'Funding: $',
	            this.props.funding
	          )
	        )
	      );
	    }
	  }]);
	  return SelectHeader;
	}(_react2.default.Component);
	
	SelectHeader.propTypes = {
	  selectCrew: _react2.default.PropTypes.func.isRequired,
	  addAllCharacters: _react2.default.PropTypes.func.isRequired,
	  allCrews: _react2.default.PropTypes.array.isRequired,
	  reputation: _react2.default.PropTypes.number.isRequired,
	  funding: _react2.default.PropTypes.number.isRequired,
	  crewName: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = SelectHeader;

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(423);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(423, function() {
				var newContent = __webpack_require__(423);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".selectHeader{position:fixed;max-height:33px;height:33px;background-color:#000;color:#fff;top:30px;z-index:2}@media (max-width:749px){.selectHeader{width:100%}}#crewSelect{float:left;vertical-align:middle;color:#000;margin:5px 0 15px 5px}#crewStats{float:right}.statLabel{padding:4px;margin-right:10px}", "", {"version":3,"sources":["/./src/routes/Builder/components/style/src/routes/Builder/components/style/SelectHeader.scss"],"names":[],"mappings":"AAAA,cACE,eAAe,gBACC,YACJ,sBACW,WACX,SACH,SACC,CACX,yBAGC,cAAgB,UAAW,CAAK,CAAA,YAIhC,WAAW,sBACW,WACV,qBACY,CACzB,WAGC,WAAY,CACb,WAGC,YAAY,iBACM,CACnB","file":"SelectHeader.scss","sourcesContent":[".selectHeader {\n  position: fixed;\n  max-height: 33px;\n  height: 33px;\n  background-color: black;\n  color: white;\n  top: 30px;\n  z-index: 2;\n}\n\n@media (max-width: 749px) {\n  .selectHeader { width: 100%; }\n}\n\n#crewSelect {\n  float: left;\n  vertical-align: middle;\n  color: black;\n  margin: 5px 0px 15px 5px;\n}\n\n#crewStats {\n  float: right;\n}\n\n.statLabel {\n  padding: 4px;\n  margin-right: 10px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(425);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Character = function (_React$Component) {
	  (0, _inherits3.default)(Character, _React$Component);
	
	  function Character() {
	    (0, _classCallCheck3.default)(this, Character);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Character.__proto__ || (0, _getPrototypeOf2.default)(Character)).call(this));
	
	    _this._onClick = _this._onClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Character, [{
	    key: 'render',
	    value: function render() {
	      var characterClass = this.props.character.rank.toLowerCase().replace(' ', '-') + '-rank';
	      return _react2.default.createElement(
	        'div',
	        { className: 'character-box ' + characterClass,
	          onClick: this._onClick },
	        _react2.default.createElement(
	          'div',
	          { className: 'character-alias' },
	          this.props.character.alias
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'character-name' },
	          this.props.character.name
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'character-cost' },
	          _react2.default.createElement(
	            'div',
	            { className: 'character-rep' },
	            this.props.character.reputation,
	            ' '
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'character-funding' },
	            '$',
	            this.props.character.funding
	          )
	        )
	      );
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      this.props.selectCharacter(this.props.character.alias);
	    }
	  }]);
	  return Character;
	}(_react2.default.Component);
	
	Character.propTypes = {
	  character: _react2.default.PropTypes.object.isRequired,
	  selectCharacter: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Character;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(426);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(426, function() {
				var newContent = __webpack_require__(426);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".character-box{position:relative;background-color:#000;color:#fff;width:80px;height:100px;font-size:75%;float:left;margin:1em;border:1px solid #000}.character-alias{font-weight:700}.character-cost{position:absolute;left:0;bottom:0;height:15px;width:100%}.character-rep{float:left;width:50%}.character-funding{float:right;width:50%}.leader-rank{background-color:#b27600;color:#fff}.sidekick-rank{background-color:#70653d;color:#fff}.free-agent-rank{background-color:#002965;color:#fff}.henchman-rank{background-color:gray}.boss-rank{background-color:#fffa37}.optional-rank{background-color:#5ac814}.no-rank{background-color:rbg(20,40,200)}", "", {"version":3,"sources":["/./src/routes/Builder/components/style/src/routes/Builder/components/style/Character.scss"],"names":[],"mappings":"AAAA,eACE,kBAAkB,sBACK,WACX,WACD,aACE,cACC,WACH,WACA,qBACY,CACxB,iBAGC,eAAiB,CAClB,gBAGC,kBAAkB,OACX,SACE,YACG,UACD,CACZ,eAGC,WAAW,SACD,CACX,mBAGC,YAAY,SACF,CACX,aAGC,yBAAkC,UACtB,CACb,eAGC,yBAAmC,UACvB,CACb,iBAGC,yBAAiC,UACrB,CACb,eAGC,qBAAsB,CACvB,WAGC,wBAAmC,CACpC,eAGC,wBAAkC,CACnC,SAGC,+BAAkC,CACnC","file":"Character.scss","sourcesContent":[".character-box {\n  position: relative;\n  background-color: black;\n  color: white;\n  width: 80px;\n  height: 100px;\n  font-size: 75%;\n  float: left;\n  margin: 1em;\n  border: solid 1px black;\n}\n\n.character-alias {\n  font-weight: bold;\n}\n\n.character-cost {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 15px;\n  width: 100%;\n}\n\n.character-rep {\n  float: left;\n  width: 50%;\n}\n\n.character-funding {\n  float: right;\n  width: 50%;\n}\n\n.leader-rank {\n  background-color: rgb(178, 118, 0);\n  color: white;\n}\n\n.sidekick-rank {\n  background-color: rgb(112, 101, 61);\n  color: white;\n}\n\n.free-agent-rank {\n  background-color: rgb(0, 41, 101);\n  color: white;\n}\n\n.henchman-rank {\n  background-color: gray;\n}\n\n.boss-rank {\n  background-color: rgb(255, 250, 55)\n}\n\n.optional-rank {\n  background-color: rgb(90, 200, 20)\n}\n\n.no-rank {\n  background-color: rbg(20, 40, 200)\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(428);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(428, function() {
				var newContent = __webpack_require__(428);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".crews{font-family:Teko,sans-serif}#rap-sheet-footer{background-color:#000;color:#fff}.character-area{background-color:grey}.clear-left{clear:left}", "", {"version":3,"sources":["/./src/routes/Builder/components/style/src/routes/Builder/components/style/Builder.scss"],"names":[],"mappings":"AAAA,OACE,2BACF,CAAE,kBAGA,sBAAuB,UACX,CACb,gBAGC,qBAAsB,CACvB,YAGC,UAAW,CACZ","file":"Builder.scss","sourcesContent":[".crews {\n  font-family: 'Teko', sans-serif\n}\n\n#rap-sheet-footer {\n  background-color: black;\n  color: white;\n}\n\n.character-area {\n  background-color: grey;\n}\n\n.clear-left {\n  clear: left;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }

});
//# sourceMappingURL=1.builder.8ab1f4ef0facd001d2e3.js.map