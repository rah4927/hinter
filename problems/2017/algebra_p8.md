---
id: fimo_2017_algebra_p8
year: 2017
number: 8
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 8"
---

Assume that a function \(f: \mathbb{R} \rightarrow \mathbb{R}\) satisfies the following condition:
For every \(x, y \in \mathbb{R}\) such that \((f(x)+y)(f(y)+x) > 0\), we have \(f(x)+y=f(y)+x\).
Prove that \(f(x)+y \leqslant f(y)+x\) whenever \(x > y\).

---
Define \(g(x)=x-f(x)\). The condition on \(f\) then rewrites as follows:
For every \(x, y \in \mathbb{R}\) such that \(((x+y)-g(x))((x+y)-g(y)) > 0\), we have \(g(x)=g(y)\).
This condition may in turn be rewritten in the following form:
If \(g(x) \neq g(y)\), then the number \(x+y\) lies (non-strictly) between \(g(x)\) and \(g(y)\).
Notice here that the function \(g_{1}(x)=-g(-x)\) also satisfies \((* )\), since

\(g_{1}(x) \neq g_{1}(y) \Longrightarrow g(-x) \neq g(-y) \quad \Longrightarrow \quad-(x+y)\) lies between \(g(-x)\) and \(g(-y)\)
\(\Longrightarrow \quad x+y\) lies between \(g_{1}(x)\) and \(g_{1}(y)\).
On the other hand, the relation we need to prove reads now as
\[
g(x) \leqslant g(y) \quad \text { whenever } x < y .
\]
Again, this condition is equivalent to the same one with \(g\) replaced by \(g_{1}\).
If \(g(x)=2 x\) for all \(x \in \mathbb{R}\), then \((* )\) is obvious; so in what follows we consider the other case. We split the solution into a sequence of lemmas, strengthening one another. We always consider some value of \(x\) with \(g(x) \neq 2 x\) and denote \(X=g(x)\).

Lemma 1. Assume that \(X < 2 x\). Then on the interval \((X-x ; x]\) the function \(g\) attains at most two values - namely, \(X\) and, possibly, some \(Y > X\). Similarly, if \(X > 2 x\), then \(g\) attains at most two values on \([x ; X-x)\) - namely, \(X\) and, possibly, some \(Y < X\).
Proof. We start with the first claim of the lemma. Notice that \(X-x < x\), so the considered interval is nonempty.
Take any \(a \in(X-x ; x)\) with \(g(a) \neq X\) (if it exists). If \(g(a) < X\), then \((* )\) yields \(g(a) \leqslant\) \(a+x \leqslant g(x)=X\), so \(a \leqslant X-x\) which is impossible. Thus, \(g(a) > X\) and hence by \((* )\) we get \(X \leqslant a+x \leqslant g(a)\).

Now, for any \(b \in(X-x ; x)\) with \(g(b) \neq X\) we similarly get \(b+x \leqslant g(b)\). Therefore, the number \(a+b\) (which is smaller than each of \(a+x\) and \(b+x)\) cannot lie between \(g(a)\) and \(g(b)\), which by \((* )\) implies that \(g(a)=g(b)\). Hence \(g\) may attain only two values on \((X-x ; x]\), namely \(X\) and \(g(a) > X\).

To prove the second claim, notice that \(g_{1}(-x)=-X < 2 \cdot(-x)\), so \(g_{1}\) attains at most two values on \((-X+x,-x]\), i.e., \(-X\) and, possibly, some \(-Y > -X\). Passing back to \(g\), we get what we need.
Lemma 2. If \(X < 2 x\), then \(g\) is constant on \((X-x ; x)\). Similarly, if \(X > 2 x\), then \(g\) is constant on \((x ; X-x)\).
Proof. Again, it suffices to prove the first claim only. Assume, for the sake of contradiction, that there exist \(a, b \in(X-x ; x)\) with \(g(a) \neq g(b)\); by Lemma 1 , we may assume that \(g(a)=X\) and \(Y=g(b) > X\).
Notice that \(\min \{X-a, X-b\} > X-x\), so there exists a \(u \in(X-x ; x)\) such that \(u < \min \{X-a, X-b\}\). By Lemma 1, we have either \(g(u)=X\) or \(g(u)=Y\). In the former case, by \((* )\) we have \(X \leqslant u+b \leqslant Y\) which contradicts \(u < X-b\). In the second case, by \((* )\) we have \(X \leqslant u+a \leqslant Y\) which contradicts \(u < X-a\). Thus the lemma is proved. Lemma 3. If \(X < 2 x\), then \(g(a)=X\) for all \(a \in(X-x ; x)\). Similarly, if \(X > 2 x\), then \(g(a)=X\) for all \(a \in(x ; X-x)\).

Proof. Again, we only prove the first claim.
By Lemmas 1 and 2, this claim may be violated only if \(g\) takes on a constant value \(Y > X\) on \((X-x, x)\). Choose any \(a, b \in(X-x ; x)\) with \(a < b\). By \((* )\), we have

\[
Y \geqslant b+x \geqslant X
\]
In particular, we have \(Y \geqslant b+x > 2 a\). Applying Lemma 2 to \(a\) in place of \(x\), we obtain that \(g\) is constant on \((a, Y-a)\). By (2) again, we have \(x \leqslant Y-b < Y-a\); so \(x, b \in(a ; Y-a)\). But \(X=g(x) \neq g(b)=Y\), which is a contradiction.
Now we are able to finish the solution. Assume that \(g(x) > g(y)\) for some \(x < y\). Denote \(X=g(x)\) and \(Y=g(y)\); by \((* )\), we have \(X \geqslant x+y \geqslant Y\), so \(Y-y \leqslant x < y \leqslant X-x\), and hence \((Y-y ; y) \cap(x ; X-x)=(x, y) \neq \varnothing\). On the other hand, since \(Y-y < y\) and \(x < X-x\), Lemma 3 shows that \(g\) should attain a constant value \(X\) on \((x ; X-x)\) and a constant value \(Y \neq X\) on \((Y-y ; y)\). Since these intervals overlap, we get the final contradiction.
