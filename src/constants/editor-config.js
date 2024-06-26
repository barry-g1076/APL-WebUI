//this Config defines the editors view
export const options = {
  lineNumbers: false,
  scrollBeyondLastLine: false,
  readOnly: false,
  fontSize: 12,
};

// This config defines how the language is displayed in the editor.
export const languageDef = {

  defaultToken: "invalid",
    keywords: [
        "INTEGER",
        "FLOAT",
        "BOOLEAN",
        "EQUAL",
        "PLUS",
        "LINEEND",
        "MINUS",
        "TIMES",
        "DIVIDE",
        "LESSTHAN",
        "GREATERTHAN",
        "LESSTHANOREQUAL",
        "GREATERTHANOREQUAL",
        "NOTEQUAL",
        "EQUIVALENT",
        "SEMICOLON",
        "COLON",
        "COMMA",
        "LPAREN",
        "RPAREN",
        "LBRACE",
        "RBRACE",
        "IDENTIFIER",
        "FUNCTIONID",
        "VISIBILITY",
        "STRING_LITERAL",
        "TYPE_SPECIFIER",
        "NOT",
        "POWER",
        "BITWISEAND",
        "BITWISEOR",
        "BITWISEXOR",
        "SHIFTLEFT",
        "SHIFTRIGHT",
        "BITWISEINVERT",
        "BOOL"
    ],

    mutables: ["lock", "unlock"],

    reserved_word: {
        abstract: "ABSTRACT",
        hail: "HAIL",
        scribe: "SCRIBE",
        unlock: "UNLOCK",
        lock: "LOCK",
        if: "IF",
        elif: "ELIF",
        then: "THEN",
        else: "ELSE",
        for: "FOR",
        do: "DO",
        while: "WHILE",
        end: "END",
        print: "PRINT",
        contract: "CONTRACT",
        public: "PUBLIC",
        private: "PRIVATE",
        internal: "INTERNAL",
        external: "EXTERNAL",
        return: "RETURN",
        returns: "RETURNS",
        emit: "EMIT",
        event: "EVENT",
        int: "INT_TYPE",
        float: "FLOAT_TYPE",
        bool: "BOOL_TYPE",
        string: "STRING_TYPE",
        var: "VAR",
        range: "RANGE",
        in: "IN",
        aslongas: "ASLONGAS",
        attempt: "ATTEMPT",
        findout: "FINDOUT",
        exception: "EXCEPTION",
        stoptteration: "STOPITERATION",
        arithmeticerror: "ARITHMETICERROR",
        floatingpointerror: "FLOATINGPOINTERROR",
        overflowerror: "OVERFLOWERROR",
        zerodivisionerror: "ZERODIVISIONERROR",
        assertionerror: "ASSERTIONERROR",
        attributeerror: "ATTRIBUTEERROR",
        buffererror: "BUFFERERROR",
        eoferror: "EOFERROR",
        importerror: "IMPORTERROR",
        modulenotfounderror: "MODULENOTFOUNERROR",
        lookuperror: "LOOKUPERROR",
        indexerror: "INDEXERROR",
        keyerror: "KEYERROR",
        memoryerror: "MEMORYERROR",
        nameerror: "NAMEERROR",
        unboundlocalerror: "UNBOUNDLOCALERROR",
        oserror: "OSERROR",
        blockingioerror: "BLOCKINGIOERROR",
        childprocesserror: "CHILDPROCESSERROR",
        connectionerror: "CONNECTIONERROR",
        brokenpipeerror: "BROKENPIPEERROR",
        connectionabortederror: "CONNECTIONABORTEDERROR",
        connectionrefusederror: "CONNECTIONREFUSEDERROR",
        connectionreseterror: "CONNECTIONRESETERROR",
        fileexistserror: "FILEEXISTERROR",
        filenotfounderror: "FILENOTFOUNERROR",
        interruptederror: "INTERRUPTEDERROR",
        isadirectoryerror: "ISADIRECTORYERROR",
        notadirectoryerror: "NOTADIRECTORYERROR",
        permissionerror: "PERMISSIONERROR",
        processlookuperror: "PROCESSLOOKUPERROR",
        timeouterror: "TIMEOUTERROR",
        referenceerror: "REFERENCEERROR",
        runtimeerror: "RUNTIMEERROR",
        syntaxerror: "SYNTAXERROR",
        indentationerror: "INDENTATIONERROR",
        taberror: "TABERROR",
        systemerror: "SYSTEMERROR",
        typeerror: "TYPEERROR",
        valueerror: "VALUEERROR",
        unicodeerror: "UNICODEERROR",
        unicodeencodeerror: "UNICODEENCODEERROR",
        unicodedecodeerror: "UNICODEDECODEERROR",
        unicodetranslateerror: "UNICODETRANSLATEERROR",
        warning: "WARNING",
        userwarning: "USERWARNING",
        deprecationwarning: "DEPRECATIONWARNING",
        pendingdeprecationwarning: "PENDINGDEPRECATIONWARNING",
        syntaxwarning: "SYNTAXWARNING",
        runtimewarning: "RUNTIMEWARNING",
        futurewarning: "FUTUREWARNING",
        importwarning: "IMPORTWARNING",
        unicodewarning: "UNICODEWARNING",
        byteswarning: "BYTESWARNING",
        resourcewarning: "RESOURCEWARNING",
        keyboardinterrupt: "KEYBOARDINTERRUPT",
    },

    operators: [
        "=",
        ">",
        "<",
        "!",
        "~",
        "?",
        ":",
        "==",
        "<=",
        ">=",
        "!=",
        "&&",
        "||",
        "++",
        "--",
        "+",
        "-",
        "*",
        "/",
        "&",
        "|",
        "^",
        "%",
        "<<",
        ">>",
        ">>>",
        "+=",
        "-=",
        "*=",
        "/=",
        "&=",
        "|=",
        "^=",
        "%=",
        "<<=",
        ">>=",
        ">>>=",
    ],

    tokenizer: {
        root: [
            [/[a-z_$][\w$]*/, { cases: { '@keywords': 'keywords',
                                         '@default': 'identifier' }
                                          }],
            [/_[a-zA-Z][a-zA-Z_0-9]*/,'variable.name'],
            [/[A-Z][\w\$]*/, 'type.identifier' ],  // to show class names nicely
            [/[0-9]+\.[0-9]+/, 'number.float'],
            [/[0-9]+/, 'number'],

            // whitespace
            { include: '@whitespace' },

            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator',
                                    '@default'  : '' } } ],

            // strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }]
        ],

        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\/.*$/, 'comment'],
        ],

        string: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
    },
}

