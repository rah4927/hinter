---
id: fimo_2017_algebra_p4
year: 2017
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 4"
---

A sequence of real numbers \(a_{1}, a_{2}, \ldots\) satisfies the relation
\[
a_{n}=-\max _{i+j=n}\left(a_{i}+a_{j}\right) \quad \text { for all } n > 2017
\]
Prove that this sequence is bounded, i.e., there is a constant \(M\) such that \(\left|a_{n}\right| \leqslant M\) for all positive integers \(n\).

---
Set \(D=2017\). Denote
\[
M_{n}=\max _{k < n} a_{k} \quad \text { and } \quad m_{n}=-\min _{k < n} a_{k}=\max _{k < n}\left(-a_{k}\right)
\]
Clearly, the sequences \(\left(m_{n}\right)\) and \(\left(M_{n}\right)\) are nondecreasing. We need to prove that both are bounded.
Consider an arbitrary \(n > D\); our first aim is to bound \(a_{n}\) in terms of \(m_{n}\) and \(M_{n}\).
(i) There exist indices \(p\) and \(q\) such that \(a_{n}=-\left(a_{p}+a_{q}\right)\) and \(p+q=n\). Since \(a_{p}, a_{q} \leqslant M_{n}\), we have \(a_{n} \geqslant-2 M_{n}\).
(ii) On the other hand, choose an index \(k < n\) such that \(a_{k}=M_{n}\). Then, we have
\[
a_{n}=-\max _{\ell < n}\left(a_{n-\ell}+a_{\ell}\right) \leqslant-\left(a_{n-k}+a_{k}\right)=-a_{n-k}-M_{n} \leqslant m_{n}-M_{n}
\]
Summarizing (i) and (ii), we get
\[
-2 M_{n} \leqslant a_{n} \leqslant m_{n}-M_{n}
\]
whence
\[
m_{n} \leqslant m_{n+1} \leqslant \max \left\{m_{n}, 2 M_{n}\right\} \quad \text { and } \quad M_{n} \leqslant M_{n+1} \leqslant \max \left\{M_{n}, m_{n}-M_{n}\right\}
\]
Now, say that an index \(n > D\) is lucky if \(m_{n} \leqslant 2 M_{n}\). Two cases are possible.
Case 1. Assume that there exists a lucky index \(n\). In this case, (1) yields \(m_{n+1} \leqslant 2 M_{n}\) and \(M_{n} \leqslant M_{n+1} \leqslant M_{n}\). Therefore, \(M_{n+1}=M_{n}\) and \(m_{n+1} \leqslant 2 M_{n}=2 M_{n+1}\). So, the index \(n+1\) is also lucky, and \(M_{n+1}=M_{n}\). Applying the same arguments repeatedly, we obtain that all indices \(k > n\) are lucky (i.e., \(m_{k} \leqslant 2 M_{k}\) for all these indices), and \(M_{k}=M_{n}\) for all such indices. Thus, all of the \(m_{k}\) and \(M_{k}\) are bounded by \(2 M_{n}\).
Case 2. Assume now that there is no lucky index, i.e., \(2 M_{n} < m_{n}\) for all \(n > D\). Then (1) shows that for all \(n > D\) we have \(m_{n} \leqslant m_{n+1} \leqslant m_{n}\), so \(m_{n}=m_{D+1}\) for all \(n > D\). Since \(M_{n} < m_{n} / 2\) for all such indices, all of the \(m_{n}\) and \(M_{n}\) are bounded by \(m_{D+1}\).
Thus, in both cases the sequences \(\left(m_{n}\right)\) and \(\left(M_{n}\right)\) are bounded, as desired.
