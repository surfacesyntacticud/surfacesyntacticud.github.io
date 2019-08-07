---
layout: default
---

# Introduction to SUD

SUD is an annotation scheme for syntactic dependency treebanks, near isomorphic to UD (Uni- versal Dependencies). Contrary to UD, it is based on syntactic criteria (favoring functional heads) and the relations are defined on distributional and functional bases.

## Try to draw Conll


<conll>
1	Can	can	AUX	MD	VerbForm=Fin	3	aux	_	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	_
3	use	use	VERB	VB	VerbForm=Inf	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
5	'	'	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	find	find	VERB	VB	VerbForm=Inf	10	compound	_	_
7	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	phone	phone	NOUN	NN	Number=Sing	6	dobj	_	SpaceAfter=No
9	'	'	PUNCT	''	_	6	punct	_	_
10	feature	feature	NOUN	NN	Number=Sing	3	dobj	_	_
11	to	to	PART	TO	_	12	mark	_	_
12	track	track	VERB	VB	VerbForm=Inf	3	advcl	_	_
13	someone	someone	NOUN	NN	Number=Sing	16	nmod:poss	_	_
14	else	else	ADJ	JJ	Degree=Pos	13	amod	_	SpaceAfter=No
15	's	's	PART	POS	_	13	case	_	_
16	phone	phone	NOUN	NN	Number=Sing	12	dobj	_	SpaceAfter=No
17	?	?	PUNCT	.	_	3	punct	_	_
</conll>


## Need help?
[Link to help page](./help.html).
