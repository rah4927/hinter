---
id: fimo_2021_algebra_p4
year: 2021
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 4"
---

Show that for all real numbers \(x_{1}, \ldots, x_{n}\) the following inequality holds:
\[
\sum_{i=1}^{n} \sum_{j=1}^{n} \sqrt{\left|x_{i}-x_{j}\right|} \leqslant \sum_{i=1}^{n} \sum_{j=1}^{n} \sqrt{\left|x_{i}+x_{j}\right|}
\]

---
If we add \(t\) to all the variables then the left-hand side remains constant and the right-hand side becomes
\[
H(t):=\sum_{i=1}^{n} \sum_{j=1}^{n} \sqrt{\left|x_{i}+x_{j}+2 t\right|}
\]
Let \(T\) be large enough such that both \(H(-T)\) and \(H(T)\) are larger than the value \(L\) of the lefthand side of the inequality we want to prove. Not necessarily distinct points \(p_{i, j}:=-\left(x_{i}+x_{j}\right) / 2\) together with \(T\) and \(-T\) split the real line into segments and two rays such that on each of these segments and rays the function \(H(t)\) is concave since \(f(t):=\sqrt{|\ell+2 t|}\) is concave on both intervals \((-\infty,-\ell / 2]\) and \([-\ell / 2,+\infty)\). Let \([a, b]\) be the segment containing zero. Then concavity implies \(H(0) \geqslant \min \{H(a), H(b)\}\) and, since \(H(\pm T) > L\), it suffices to prove the inequalities \(H\left(-\left(x_{i}+x_{j}\right) / 2\right) \geqslant L\), that is to prove the original inequality in the case when all numbers are shifted in such a way that two variables \(x_{i}\) and \(x_{j}\) add up to zero. In the following we denote the shifted variables still by \(x_{i}\).
If \(i=j\), i.e. \(x_{i}=0\) for some index \(i\), then we can remove \(x_{i}\) which will decrease both sides by \(2 \sum_{k} \sqrt{\left|x_{k}\right|}\). Similarly, if \(x_{i}+x_{j}=0\) for distinct \(i\) and \(j\) we can remove both \(x_{i}\) and \(x_{j}\) which decreases both sides by
\[
2 \sqrt{2\left|x_{i}\right|}+2 \cdot \sum_{k \neq i, j}\left(\sqrt{\left|x_{k}+x_{i}\right|}+\sqrt{\left|x_{k}+x_{j}\right|}\right)
\]
In either case we reduced our inequality to the case of smaller \(n\). It remains to note that for \(n=0\) and \(n=1\) the inequality is trivial.
