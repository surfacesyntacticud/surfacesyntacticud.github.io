---
layout: default
---

# **chained conjuncts**
In UD, all conjuncts of a coordination are attached to the head of the first conjunct in a bouquet. In SUD, each conjunct is attached to the head of the previous one in a chain.

The first example below shows the annotation of a coordination in UD and the second one the corresponding annotation in SUD.

<div>
<conll>
1	John	John	PROPN	_	_	9	subj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	and	and	CCONJ	_	_	5	cc	_	_
5	Peter	Peter	PROPN	_	_	1	conj	_	_
6	will	will	AUX	_	_	7	aux	_	_
7	come	come	VERB	_	_	0	root	_	_
</conll>
</div>

<div>
<conll>
1	John	John	PROPN	_	_	9	subj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	and	and	CCONJ	_	_	5	cc	_	_
5	Peter	Peter	PROPN	_	_	3	conj	_	_
6	will	will	AUX	_	_	0	root	_	_
7	come	come	VERB	_	_	6	comp:aux	_	_
</conll>
</div>

# **embedded coordination**
The conjunct of a coordination can be itself a coordination. Theoretically, this embedding can be iterated indefinetely but in corpora, there is generally one iteration.
The use of the same label for all `conj` relations does not make it possible to distinguish embedded relations from surface relations in SUD because they form a single chain.
In order to distinguish embedded `conj`relations from surface `conj` relations, we use the extension `emb`, as the following example shows.

<div>
<conll>
1	John	John	PROPN	_	_	9	subj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	or	or	CCONJ	_	_	6	cc	_	_
5	her	her	DET	_	_	2	comp:cleft	_	_
6	brother	brother	NOUN	_	_	3	conj:emb	_	_
7	and	and	CCONJ	_	_	8	cc	_	_
8	Peter	Peter	PROPN	_	_	6	conj	_	_
9	will	will	AUX	_	_	0	root	_	_
10	come	come	VERB	_	_	9	comp:aux	_	_
</conll>
</div>


