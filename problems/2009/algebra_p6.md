---
id: fimo_2009_algebra_p6
year: 2009
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 6"
---

Suppose that \(s_{1}, s_{2}, s_{3}, \ldots\) is a strictly increasing sequence of positive integers such that the subsequences

\[
s_{s_{1}}, s_{s_{2}}, s_{s_{3}}, \ldots \quad \text { and } \quad s_{s_{1}+1}, s_{s_{2}+1}, s_{s_{3}+1}, \ldots
\]

are both arithmetic progressions. Prove that \(s_{1}, s_{2}, s_{3}, \ldots\) is itself an arithmetic progression.

---
Let \(D\) be the common difference of the progression \(s_{s_{1}}, s_{s_{2}}, \ldots\). Let for \(n=\) \(1,2, \ldots\)

\[
d_{n}=s_{n+1}-s_{n} .
\]

We have to prove that \(d_{n}\) is constant. First we show that the numbers \(d_{n}\) are bounded. Indeed, by supposition \(d_{n} \geq 1\) for all \(n\). Thus, we have for all \(n\)

\[
d_{n}=s_{n+1}-s_{n} \leq d_{s_{n}}+d_{s_{n}+1}+\cdots+d_{s_{n+1}-1}=s_{s_{n+1}}-s_{s_{n}}=D .
\]

The boundedness implies that there exist

\[
m=\min \left\{d_{n}: n=1,2, \ldots\right\} \quad \text { and } \quad M=\max \left\{d_{n}: n=1,2, \ldots\right\} .
\]

It suffices to show that \(m=M\). Assume that \(m < M\). Choose \(n\) such that \(d_{n}=m\). Considering a telescoping sum of \(m=d_{n}=s_{n+1}-s_{n}\) items not greater than \(M\) leads to

\[
D=s_{s_{n+1}}-s_{s_{n}}=s_{s_{n}+m}-s_{s_{n}}=d_{s_{n}}+d_{s_{n}+1}+\cdots+d_{s_{n}+m-1} \leq m M
\]

and equality holds if and only if all items of the sum are equal to \(M\). Now choose \(n\) such that \(d_{n}=M\). In the same way, considering a telescoping sum of \(M\) items not less than \(m\) we obtain

\[
D=s_{s_{n+1}}-s_{s_{n}}=s_{s_{n}+M}-s_{s_{n}}=d_{s_{n}}+d_{s_{n}+1}+\cdots+d_{s_{n}+M-1} \geq M m
\]

and equality holds if and only if all items of the sum are equal to \(m\). The inequalities (1) and (2) imply that \(D=M m\) and that

\[
\begin{aligned}
d_{s_{n}}=d_{s_{n}+1}=\cdots=d_{s_{n+1}-1}=M & \text { if } d_{n}=m \\
d_{s_{n}}=d_{s_{n}+1}=\cdots=d_{s_{n+1}-1}=m & \text { if } d_{n}=M
\end{aligned}
\]

Hence, \(d_{n}=m\) implies \(d_{s_{n}}=M\). Note that \(s_{n} \geq s_{1}+(n-1) \geq n\) for all \(n\) and moreover \(s_{n}>n\) if \(d_{n}=n\), because in the case \(s_{n}=n\) we would have \(m=d_{n}=d_{s_{n}}=M\) in contradiction to the assumption \(m < M\). In the same way \(d_{n}=M\) implies \(d_{s_{n}}=m\) and \(s_{n}>n\). Consequently, there is a strictly increasing sequence \(n_{1}, n_{2}, \ldots\) such that

\[
d_{s_{n_{1}}}=M, \quad d_{s_{n_{2}}}=m, \quad d_{s_{n_{3}}}=M, \quad d_{s_{n_{4}}}=m, \quad \ldots
\]

The sequence \(d_{s_{1}}, d_{s_{2}}, \ldots\) is the sequence of pairwise differences of \(s_{s_{1}+1}, s_{s_{2}+1}, \ldots\) and \(s_{s_{1}}, s_{s_{2}}, \ldots\), hence also an arithmetic progression. Thus \(m=M\).
