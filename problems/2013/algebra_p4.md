---
id: fimo_2013_algebra_p4
year: 2013
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 4"
---

Let \(n\) be a positive integer, and consider a sequence \(a_{1}, a_{2}, \ldots, a_{n}\) of positive integers. Extend it periodically to an infinite sequence \(a_{1}, a_{2}, \ldots\) by defining \(a_{n+i}=a_{i}\) for all \(i \geqslant 1\). If

\[
a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n} \leqslant a_{1}+n
\]

and

\[
a_{a_{i}} \leqslant n+i-1 \quad \text { for } i=1,2, \ldots, n,
\]

prove that

\[
a_{1}+\cdots+a_{n} \leqslant n^{2} .
\]

---
First, we claim that

\[
a_{i} \leqslant n+i-1 \quad \text { for } i=1,2, \ldots, n \text {. }
\]

Assume contrariwise that \(i\) is the smallest counterexample. From \(a_{n} \geqslant a_{n-1} \geqslant \cdots \geqslant a_{i} \geqslant n+i\) and \(a_{a_{i}} \leqslant n+i-1\), taking into account the periodicity of our sequence, it follows that

\[
a_{i} \text { cannot be congruent to } i, i+1, \ldots, n-1, \text { or } n \quad(\bmod n) .
\]

Thus our assumption that \(a_{i} \geqslant n+i\) implies the stronger statement that \(a_{i} \geqslant 2 n+1\), which by \(a_{1}+n \geqslant a_{n} \geqslant a_{i}\) gives \(a_{1} \geqslant n+1\). The minimality of \(i\) then yields \(i=1\), and (4) becomes contradictory. This establishes our first claim.

In particular we now know that \(a_{1} \leqslant n\). If \(a_{n} \leqslant n\), then \(a_{1} \leqslant \cdots \leqslant \cdots a_{n} \leqslant n\) and the desired inequality holds trivially. Otherwise, consider the number \(t\) with \(1 \leqslant t \leqslant n-1\) such that

\[
a_{1} \leqslant a_{2} \leqslant \ldots \leqslant a_{t} \leqslant n < a_{t+1} \leqslant \ldots \leqslant a_{n} .
\]

Since \(1 \leqslant a_{1} \leqslant n\) and \(a_{a_{1}} \leqslant n\) by (2), we have \(a_{1} \leqslant t\) and hence \(a_{n} \leqslant n+t\). Therefore if for each positive integer \(i\) we let \(b_{i}\) be the number of indices \(j \in\{t+1, \ldots, n\}\) satisfying \(a_{j} \geqslant n+i\), we have

\[
b_{1} \geqslant b_{2} \geqslant \ldots \geqslant b_{t} \geqslant b_{t+1}=0 .
\]

Next we claim that \(a_{i}+b_{i} \leqslant n\) for \(1 \leqslant i \leqslant t\). Indeed, by \(n+i-1 \geqslant a_{a_{i}}\) and \(a_{i} \leqslant n\), each \(j\) with \(a_{j} \geqslant n+i\) (thus \(a_{j}>a_{a_{i}}\) ) belongs to \(\left\{a_{i}+1, \ldots, n\right\}\), and for this reason \(b_{i} \leqslant n-a_{i}\).

It follows from the definition of the \(b_{i} \mathrm{~s}\) and (5) that

\[
a_{t+1}+\ldots+a_{n} \leqslant n(n-t)+b_{1}+\ldots+b_{t} .
\]

Adding \(a_{1}+\ldots+a_{t}\) to both sides and using that \(a_{i}+b_{i} \leqslant n\) for \(1 \leqslant i \leqslant t\), we get

\[
a_{1}+a_{2}+\cdots+a_{n} \leqslant n(n-t)+n t=n^{2}
\]

as we wished to prove.
