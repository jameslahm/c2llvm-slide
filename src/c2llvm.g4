grammar c2llvm;

prog: (include)* (declaration | statement)*;

include: '#include' '<' HEADER '>';

declaration: functionDeclaration | structDeclaration;

functionDeclaration:
	vType vId '(' paramsDefinitionPattern ')' '{' statement* '}';

structDeclaration:
	vStruct '{' (structMemberDeclaration)+ '}' ';';

structMemberDeclaration:
	(vType | vStruct) (vId | vArray) (',' (vId | vArray))* ';';

statement:
	variableDefinitionStatement
	| arrayDefinitionStatement
	| structDefinitionStatement
	| assignStatement
	| conditionStatement
	| whileStatement
	| forStatement
	| returnStatement
	| breakStatement
	| continueStatement
	| funcStatement;
