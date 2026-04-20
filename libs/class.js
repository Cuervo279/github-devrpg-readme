const classMap = {
  Python: {
    "classe": "AI Wizard",
    "guild": "🧠 Data / Science Guild"
  },
  JavaScript: {
    "classe": "Web Rogue",
    "guild": "🌐 Frontend Guild"
  },
  Java: {
    "classe": "Enterprise Paladin",
    "guild": "⚙️ Backend Guild"
  },
  C: {
    "classe": "Kernel Blacksmith",
    "guild": "🗡 Systems Guild"
  },
  "C++": {
    "classe": "Systems Berserker",
    "guild": "🗡 Systems Guild"
  },
  "C#": {
    "classe": "Unity Knight",
    "guild": "🎮 Game Dev Guild"
  },
  "TypeScript": {
    "classe": "Frontend Knight",
    "guild": "🌐 Frontend Guild"
  },
  "PHP": {
    "classe": "Backend Warlock",
    "guild": "⚙️ Backend Guild"
  },
  "Go": {
    "classe": "Cloud Ranger",
    "guild": "⚙️ Backend Guild"
  },
  "Rust": {
    "classe": "Memory Guardian",
    "guild": "🗡 Systems Guild"
  },
  "Swift": {
    "classe": "iOS Guardian",
    "guild": "📱 Mobile Guild"
  },
  "Kotlin": {
    "classe": "Android Paladin",
    "guild": "📱 Mobile Guild"
  },
  "SQL": {
    "classe": "Data Architect",
    "guild": "🧠 Data / Science Guild"
  },
  "Ruby": {
    "classe": "Rails Enchanter",
    "guild": "⚙️ Backend Guild"
  },
  "R": {
    "classe": "Data Oracle",
    "guild": "🧠 Data / Science Guild"
  },
  "Objective-C": {
    "classe": "Legacy Sentinel",
    "guild": "📱 Mobile Guild"
  },
  "Dart": {
    "classe": "Flutter Scout",
    "guild": "📱 Mobile Guild"
  },
  "Scala": {
    "classe": "Functional Titan",
    "guild": "🔮 Functional Guild"
  },
  "Perl": {
    "classe": "Regex Necromancer",
    "guild": "🖥 Scripting Guild"
  },
  "Lua": {
    "classe": "Embedded Trickster",
    "guild": "🖥 Scripting Guild"
  },
  "Matlab": {
    "classe": "Numerical Sage",
    "guild": "🧠 Data / Science Guild"
  },
  "Delphi/Pascal": {
    "classe": "Desktop Squire",
    "guild": "⚙️ Backend Guild"
  },
  "Assembly": {
    "classe": "Bare-Metal Monk",
    "guild": "🗡 Systems Guild"
  },
  "VBA": {
    "classe": "Spreadsheet Cleric",
    "guild": "💼 Office Guild"
  },
  "Visual Basic": {
    "classe": "Form Invoker",
    "guild": "💼 Office Guild"
  },
  "Haskell": {
    "classe": "Pure Mage",
    "guild": "🔮 Functional Guild"
  },
  "Fortran": {
    "classe": "Math Ancient",
    "guild": "🧠 Data / Science Guild"
  },
  "COBOL": {
    "classe": "Banking Lich",
    "guild": "🏛 Legacy Guild"
  },
  "Groovy": {
    "classe": "Scripting Bard",
    "guild": "⚙️ Backend Guild"
  },
  "Julia": {
    "classe": "Scientific Arcanist",
    "guild": "🧠 Data / Science Guild"
  },
  "Zig": {
    "classe": "Systems Tactician",
    "guild": "🗡 Systems Guild"
  },
  "Elixir": {
    "classe": "Distributed Alchemist",
    "guild": "🔮 Functional Guild"
  },
  "Erlang": {
    "classe": "Concurrency Shaman",
    "guild": "🔮 Functional Guild"
  },
  "F#": {
    "classe": "Logic Duelist",
    "guild": "🔮 Functional Guild"
  },
  "Lisp": {
    "classe": "Macro Weaver",
    "guild": "🔮 Functional Guild"
  },
  "Prolog": {
    "classe": "Inference Inquisitor",
    "guild": "🧠 Data / Science Guild"
  },
  "Ada": {
    "classe": "Safety Centurion",
    "guild": "🛡 Defense Guild"
  },
  "Bash/Shell": {
    "classe": "Terminal Ninja",
    "guild": "🖥 Scripting Guild"
  },
  "PowerShell": {
    "classe": "Automation Paladin",
    "guild": "🖥 Scripting Guild"
  },
  "Apex": {
    "classe": "CRM Conjurer",
    "guild": "☁️ Cloud Guild"
  },
  "ABAP": {
    "classe": "SAP Merchant",
    "guild": "🏢 Corporate Guild"
  },
  "SAS": {
    "classe": "Analytics Seer",
    "guild": "🧠 Data / Science Guild"
  },
  "Scratch": {
    "classe": "Junior Apprentice",
    "guild": "🎓 Academy Guild"
  },
  "Clojure": {
    "classe": "Lisp Druid",
    "guild": "🔮 Functional Guild"
  },
  "PL/SQL": {
    "classe": "Procedure Keeper",
    "guild": "🧠 Data / Science Guild"
  },
  "Transact-SQL": {
    "classe": "Query Master",
    "guild": "🧠 Data / Science Guild"
  },
  "Scheme": {
    "classe": "Lambda Disciple",
    "guild": "🔮 Functional Guild"
  },
  "Raku": {
    "classe": "Multi-Paradigm Wanderer",
    "guild": "🖥 Scripting Guild"
  },
  "Logo": {
    "classe": "Geometry Artist",
    "guild": "🎓 Academy Guild"
  },
  "ActionScript": {
    "classe": "Flash Ghost",
    "guild": "🎮 Game Dev Guild"
  },
  "GML": {
    "classe": "Game Crafter",
    "guild": "🎮 Game Dev Guild"
  },
  "Verilog": {
    "classe": "Hardware Sculptor",
    "guild": "⚡ Hardware Guild"
  },
  "VHDL": {
    "classe": "Circuit Architect",
    "guild": "⚡ Hardware Guild"
  },
  "Smalltalk": {
    "classe": "Object Nomad",
    "guild": "🔮 Functional Guild"
  },
  "Racket": {
    "classe": "Syntax Shaper",
    "guild": "🔮 Functional Guild"
  },
  "Vala": {
    "classe": "Native Spellblade",
    "guild": "🗡 Systems Guild"
  },
  "PureScript": {
    "classe": "Typed Mystic",
    "guild": "🌐 Frontend Guild"
  },
  "Forth": {
    "classe": "Stack Manipulator",
    "guild": "🗡 Systems Guild"
  },
  "OpenCL": {
    "classe": "Parallel Voyager",
    "guild": "🗡 Systems Guild"
  },
  "Solidity": {
    "classe": "Chain Summoner",
    "guild": "⛓ Blockchain Guild"
  },
  "LabVIEW": {
    "classe": "Visual Alchemist",
    "guild": "🧠 Data / Science Guild"
  },
  "PostScript": {
    "classe": "Print Prophet",
    "guild": "🎨 Design Guild"
  },
  "Rexx": {
    "classe": "Mainframe Pilot",
    "guild": "🏛 Legacy Guild"
  },
  "JCL": {
    "classe": "Job Commander",
    "guild": "🏛 Legacy Guild"
  },
  "MQL4/5": {
    "classe": "Trading Assassin",
    "guild": "💹 Finance Guild"
  },
  "AHDL": {
    "classe": "Logic Smith",
    "guild": "⚡ Hardware Guild"
  },
  "Tcl": {
    "classe": "Command Specialist",
    "guild": "🖥 Scripting Guild"
  },
  "AutoLISP": {
    "classe": "CAD Sorcerer",
    "guild": "📐 Design Guild"
  },
  "X++": {
    "classe": "ERP Gladiator",
    "guild": "🏢 Corporate Guild"
  },
  "Clarion": {
    "classe": "Data Streamer",
    "guild": "⚙️ Backend Guild"
  },
  "PL/I": {
    "classe": "Multi-Core Veteran",
    "guild": "🏛 Legacy Guild"
  },
  "Simula": {
    "classe": "Progenitor Druid",
    "guild": "🔮 Functional Guild"
  },
  "Modula-2": {
    "classe": "Component Monk",
    "guild": "🗡 Systems Guild"
  },
  "Eiffel": {
    "classe": "Contract Guardian",
    "guild": "🗡 Systems Guild"
  },
  "Nim": {
    "classe": "Agile Shapeshifter",
    "guild": "🗡 Systems Guild"
  },
  "Haxe": {
    "classe": "Cross-Platform Mimic",
    "guild": "🎮 Game Dev Guild"
  },
  "LiveCode": {
    "classe": "Rapid Enchanter",
    "guild": "📱 Mobile Guild"
  },
  "PowerBuilder": {
    "classe": "Database Raider",
    "guild": "⚙️ Backend Guild"
  },
  "Maplesoft": {
    "classe": "Calculus Overlord",
    "guild": "🧠 Data / Science Guild"
  },
  "SPARC": {
    "classe": "RISC Warrior",
    "guild": "🗡 Systems Guild"
  },
  "Inform": {
    "classe": "Narrative Teller",
    "guild": "🎮 Game Dev Guild"
  },
  "OpenEdge ABL": {
    "classe": "Business Rogue",
    "guild": "🏢 Corporate Guild"
  },
  "Mojo": {
    "classe": "AI Speedster",
    "guild": "🧠 Data / Science Guild"
  },
  "Crystal": {
    "classe": "Ruby Berserker",
    "guild": "⚙️ Backend Guild"
  },
  "D": {
    "classe": "Performance Duelist",
    "guild": "🗡 Systems Guild"
  },
  "OCaml": {
    "classe": "Lambda Knight",
    "guild": "🔮 Functional Guild"
  },
  "Ballerina": {
    "classe": "Integration Dancer",
    "guild": "⚙️ Backend Guild"
  },
  "Ring": {
    "classe": "Scripting Generalist",
    "guild": "🖥 Scripting Guild"
  },
  "Hack": {
    "classe": "Typed Shadow",
    "guild": "⚙️ Backend Guild"
  },
  "AWK": {
    "classe": "Text Slayer",
    "guild": "🖥 Scripting Guild"
  },
  "Small Basic": {
    "classe": "Entry Squire",
    "guild": "🎓 Academy Guild"
  },
  "BQN": {
    "classe": "Array Mentalist",
    "guild": "🧠 Data / Science Guild"
  },
  "V": {
    "classe": "Static Ghost",
    "guild": "🗡 Systems Guild"
  },
  "Carbon": {
    "classe": "C++ Successor",
    "guild": "🗡 Systems Guild"
  },
  "IDL": {
    "classe": "Visualization Mage",
    "guild": "🧠 Data / Science Guild"
  },
  "GDScript": {
    "classe": "Engine Tamer",
    "guild": "🎮 Game Dev Guild"
  },
  "Gleam": {
    "classe": "Beaming Healer",
    "guild": "🔮 Functional Guild"
  },
  "ReScript": {
    "classe": "Typed Illusionist",
    "guild": "🌐 Frontend Guild"
  },
  "Elm": {
    "classe": "Pattern Guardian",
    "guild": "🌐 Frontend Guild"
  },
  "HTML": {
    "classe": "Markup Artisan",
    "guild": "🌐 Frontend Guild"
  },
  "CSS": {
    "classe": "Style Alchemist",
    "guild": "🌐 Frontend Guild"
  },
  "SCSS": {
    "classe": "Style Overlord",
    "guild": "🌐 Frontend Guild"
  },
  "Vue": {
    "classe": "Reactive Sorcerer",
    "guild": "🌐 Frontend Guild"
  }
}

export function getDevClass(topLanguages = []) {

  const main = classMap[topLanguages[0]]
  const sub = classMap[topLanguages[1]]

  return {
    classe: main?.classe || "Code Adventurer",
    guild: main?.guild || "🧭 Unknown Guild",
    subclass: sub?.classe || null
  }
}