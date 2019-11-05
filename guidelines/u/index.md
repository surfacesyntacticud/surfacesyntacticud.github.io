---
layout: default
---

# SUD Guidelines

SUD is a Surface-syntax Universal Dependencies scheme. SUD follows the Surface syntax criteria (favoring functional heads) and can be automatically converted in the UD scheme.

The other layers of annotations follow the UD guidelines. Please refer to UD for these aspects:

  * [Tokenization and word segmentation](https://universaldependencies.org/u/overview/tokenization.html)
  * [Morphology](https://universaldependencies.org/u/overview/morphology.html)
  * [POS tags](https://universaldependencies.org/u/pos/index.html) ([single document](https://universaldependencies.org/u/pos/all.html))
  * [Features](https://universaldependencies.org/u/feat/index.html) ([single document](https://universaldependencies.org/u/feat/all.html))
    * [Layered features](https://universaldependencies.org/u/overview/feat-layers.html)
    * [Language-specific features](https://universaldependencies.org/ext-feat-index.html)

## General Principles
SUD differs from UD in several [general principles](./general_principles/index.html).


## Specific SUD relations
As a consequence, SUD has specific syntactic relations:

 * [`subj`](./relations/subj.html)
 * [`udep`](./relations/udep.html)
   * [`mod`](./relations/mod.html)
   * [`comp`](./relations/comp.html)
     * [`comp:obl`](./relations/comp:obl.html)
     * [`comp:obj`](./relations/comp:obj.html)
     * [`comp:aux`](./relations/comp:aux.html)
     * [`comp:pred`](./relations/comp:pred.html)
     * [`comp:cleft`](./relations/comp:cleft.html)

## SUD relations shared with UD
Nevertheless, SUD share some syntactic relations with UD, the list of which is given below (links to UD related page are given):
  [vocative](https://universaldependencies.org/u/dep/vocative.html),
  [dislocated](https://universaldependencies.org/u/dep/dislocated.html),
  [discourse](https://universaldependencies.org/u/dep/discourse.html),
  [appos](https://universaldependencies.org/u/dep/appos.html),
  [det](https://universaldependencies.org/u/dep/det.html),
  [clf](https://universaldependencies.org/u/dep/clf.html),
  [conj](https://universaldependencies.org/u/dep/conj.html),
  [cc](https://universaldependencies.org/u/dep/cc.html),
  [flat](https://universaldependencies.org/u/dep/flat.html),
  [parataxis](https://universaldependencies.org/u/dep/parataxis.html),
  [orphan](https://universaldependencies.org/u/dep/orphan.html),
  [goeswith](https://universaldependencies.org/u/dep/goeswith.html),
  [reparandum](https://universaldependencies.org/u/dep/reparandum.html),
  [punct](https://universaldependencies.org/u/dep/punct.html).

## SUD deep features
In SUD, dependency relations are designed to describe syntactic surface relations.
Information related to deep syntax or semantics is given on dependencies with *deep features* which are extensions to dependency label introduced by the `@` symbol.

The main deep features are: [`@relcl`](./deep_features/relcl.html), [`@x`](./deep_features/x.html), [`@agent`](./deep_features/agent.html),[`@lvc`](./deep_features/lvc.html), [`@tense`](./deep_features/tense.html), [`@pass`](./deep_features/pass.html), [`@caus`](./deep_features/caus.html), [`@fixed`](./deep_features/fixed.html)
