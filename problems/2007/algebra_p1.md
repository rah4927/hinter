---
id: fimo_2007_algebra_p1_2
year: 2007
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 1"
---

Given a sequence \(a_{1}, a_{2}, \ldots, a_{n}\) of real numbers. For each \(i(1 \leq i \leq n)\) define

\[
d_{i}=\max \left\{a_{j}: 1 \leq j \leq i\right\}-\min \left\{a_{j}: i \leq j \leq n\right\}
\]

and let

\[
d=\max \left\{d_{i}: 1 \leq i \leq n\right\} .
\]

\[
\max \left\{\left|x_{i}-a_{i}\right|: 1 \leq i \leq n\right\} \geq \frac{d}{2}
\]

Show that there exists a sequence \(x_{1} \leq x_{2} \leq \ldots \leq x_{n}\) of real numbers such that we have equality in (1).

---
Define the sequence \(\left(x_{k}\right)\) as

\[
x_{1}=a_{1}-\frac{d}{2}, \quad x_{k}=\max \left\{x_{k-1}, a_{k}-\frac{d}{2}\right\} \quad \text { for } 2 \leq k \leq n .
\]

We show that we have equality in (1) for this sequence.

By the definition, sequence \(\left(x_{k}\right)\) is non-decreasing and \(x_{k}-a_{k} \geq-\frac{d}{2}\) for all \(1 \leq k \leq n\). Next we prove that

\[
x_{k}-a_{k} \leq \frac{d}{2} \quad \text { for all } 1 \leq k \leq n .
\]

Consider an arbitrary index \(1 \leq k \leq n\). Let \(\ell \leq k\) be the smallest index such that \(x_{k}=x_{\ell}\). We have either \(\ell=1\), or \(\ell \geq 2\) and \(x_{\ell} > x_{\ell-1}\). In both cases,

\[
x_{k}=x_{\ell}=a_{\ell}-\frac{d}{2} .
\]

Since

\[
a_{\ell}-a_{k} \leq \max \left\{a_{j}: 1 \leq j \leq k\right\}-\min \left\{a_{j}: k \leq j \leq n\right\}=d_{k} \leq d
\]

equality (3) implies

\[
x_{k}-a_{k}=a_{\ell}-a_{k}-\frac{d}{2} \leq d-\frac{d}{2}=\frac{d}{2} .
\]

We obtained that \(-\frac{d}{2} \leq x_{k}-a_{k} \leq \frac{d}{2}\) for all \(1 \leq k \leq n\), so

\[
\max \left\{\left|x_{i}-a_{i}\right|: 1 \leq i \leq n\right\} \leq \frac{d}{2}
\]

We have equality because \(\left|x_{1}-a_{1}\right|=\frac{d}{2}\)
