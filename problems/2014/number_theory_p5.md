---
id: fimo_2014_number_theory_p5
year: 2014
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 5"
---

Find all triples \((p, x, y)\) consisting of a prime number \(p\) and two positive integers \(x\) and \(y\) such that \(x^{p-1}+y\) and \(x+y^{p-1}\) are both powers of \(p\).

The final answer is \((p, x, y) \in\{(3,2,5),(3,5,2)\} \cup\left\{\left(2, n, 2^{k}-n\right) \mid 0 < n < 2^{k}\right\}\).

---
For \(p=2\), clearly all pairs of two positive integers \(x\) and \(y\) whose sum is a power of 2 satisfy the condition. Thus we assume in the following that \(p > 2\), and we let \(a\) and \(b\) be positive integers such that \(x^{p-1}+y=p^{a}\) and \(x+y^{p-1}=p^{b}\). Assume further, without loss of generality, that \(x \leqslant y\), so that \(p^{a}=x^{p-1}+y \leqslant x+y^{p-1}=p^{b}\), which means that \(a \leqslant b\) (and thus \(\left.p^{a} \mid p^{b}\right)\)

Now we have

\[
p^{b}=y^{p-1}+x=\left(p^{a}-x^{p-1}\right)^{p-1}+x .
\]

We take this equation modulo \(p^{a}\) and take into account that \(p-1\) is even, which gives us

\[
0 \equiv x^{(p-1)^{2}}+x \quad\left(\bmod p^{a}\right) .
\]

If \(p \mid x\), then \(p^{a} \mid x\), since \(x^{(p-1)^{2}-1}+1\) is not divisible by \(p\) in this case. However, this is impossible, since \(x \leqslant x^{p-1} < p^{a}\). Thus we know that \(p \nmid x\), which means that

\[
p^{a} \mid x^{(p-1)^{2}-1}+1=x^{p(p-2)}+1 .
\]

By FERMAT's little theorem, \(x^{(p-1)^{2}} \equiv 1(\bmod p)\), thus \(p\) divides \(x+1\). Let \(p^{r}\) be the highest power of \(p\) that divides \(x+1\). By the binomial theorem, we have

\[
x^{p(p-2)}=\sum_{k=0}^{p(p-2)}\left(\begin{array}{c}
p(p-2) \\
k
\end{array}\right)(-1)^{p(p-2)-k}(x+1)^{k} .
\]

Except for the terms corresponding to \(k=0, k=1\) and \(k=2\), all terms in the sum are clearly divisible by \(p^{3 r}\) and thus by \(p^{r+2}\). The remaining terms are

\[
-\frac{p(p-2)\left(p^{2}-2 p-1\right)}{2}(x+1)^{2},
\]

which is divisible by \(p^{2 r+1}\) and thus also by \(p^{r+2}\),

\[
p(p-2)(x+1),
\]

which is divisible by \(p^{r+1}\), but not \(p^{r+2}\) by our choice of \(r\), and the final term \(-1\) corresponding to \(k=0\). It follows that the highest power of \(p\) that divides \(x^{p(p-2)}+1\) is \(p^{r+1}\).

On the other hand, we already know that \(p^{a}\) divides \(x^{p(p-2)}+1\), which means that \(a \leqslant r+1\). Moreover,

\[
p^{r} \leqslant x+1 \leqslant x^{p-1}+y=p^{a} .
\]

Hence we either have \(a=r\) or \(a=r+1\).

If \(a=r\), then \(x=y=1\) needs to hold in the inequality above, which is impossible for \(p > 2\). Thus \(a=r+1\). Now since \(p^{r} \leqslant x+1\), we get

\[
x=\frac{x^{2}+x}{x+1} \leqslant \frac{x^{p-1}+y}{x+1}=\frac{p^{a}}{x+1} \leqslant \frac{p^{a}}{p^{r}}=p,
\]

so we must have \(x=p-1\) for \(p\) to divide \(x+1\).

It follows that \(r=1\) and \(a=2\). If \(p \geqslant 5\), we obtain

\[
p^{a}=x^{p-1}+y > (p-1)^{4}=\left(p^{2}-2 p+1\right)^{2} > (3 p)^{2} > p^{2}=p^{a},
\]

a contradiction. So the only case that remains is \(p=3\), and indeed \(x=2\) and \(y=p^{a}-x^{p-1}=5\) satisfy the conditions.
