---
id: fimo_2021_algebra_p8
year: 2021
number: 8
difficulty: medium
topics: ["algebra"]
source: "IMO 2021 Algebra Problem 8"
---

Determine all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) that satisfy
\[
(f(a)-f(b))(f(b)-f(c))(f(c)-f(a))=f\left(a b^{2}+b c^{2}+c a^{2}\right)-f\left(a^{2} b+b^{2} c+c^{2} a\right)
\]
for all real numbers \(a, b, c\).


---
It is straightforward to check that above functions satisfy the equation. Now let \(f(x)\) satisfy the equation, which we denote \(E(a, b, c)\). Then clearly \(f(x)+C\) also does; therefore, we may suppose without loss of generality that \(f(0)=0\). We start with proving
Lemma. Either \(f(x) \equiv 0\) or \(f\) is injective.
Proof. Denote by \(\Theta \subseteq \mathbb{R}^{2}\) the set of points \((a, b)\) for which \(f(a)=f(b)\). Let \(\Theta^{* }=\{(x, y) \in \Theta\) : \(x \neq y\}\). The idea is that if \((a, b) \in \Theta\), then by \(E(a, b, x)\) we get

\[
H_{a, b}(x):=\left(a b^{2}+b x^{2}+x a^{2}, a^{2} b+b^{2} x+x^{2} a\right) \in \Theta
\]
for all real \(x\). Reproducing this argument starting with \((a, b) \in \Theta^{* }\), we get more and more points in \(\Theta\). There are many ways to fill in the details, we give below only one of them.

Assume that \((a, b) \in \Theta^{* }\). Note that

\[
g_{-}(x):=\left(a b^{2}+b x^{2}+x a^{2}\right)-\left(a^{2} b+b^{2} x+x^{2} a\right)=(a-b)(b-x)(x-a)
\]
and
\[
g_{+}(x):=\left(a b^{2}+b x^{2}+x a^{2}\right)+\left(a^{2} b+b^{2} x+x^{2} a\right)=\left(x^{2}+a b\right)(a+b)+x\left(a^{2}+b^{2}\right)
\]
Hence, there exists \(x\) for which both \(g_{-}(x) \neq 0\) and \(g_{+}(x) \neq 0\). This gives a point \((\alpha, \beta)=\) \(H_{a, b}(x) \in \Theta^{* }\) for which \(\alpha \neq-\beta\). Now compare \(E(\alpha, 1,0)\) and \(E(\beta, 1,0)\). The left-hand side expressions coincide, on right-hand side we get \(f(\alpha)-f\left(\alpha^{2}\right)=f(\beta)-f\left(\beta^{2}\right)\), respectively. Hence, \(f\left(\alpha^{2}\right)=f\left(\beta^{2}\right)\) and we get a point \(\left(\alpha_{1}, \beta_{1}\right):=\left(\alpha^{2}, \beta^{2}\right) \in \Theta^{* }\) with both coordinates \(\alpha_{1}, \beta_{1}\) non-negative. Continuing squaring the coordinates, we get a point \((\gamma, \delta) \in \Theta^{* }\) for which \(\delta > 5 \gamma \geqslant 0\). Our nearest goal is to get a point \((0, r) \in \Theta^{* }\). If \(\gamma=0\), this is already done. If \(\gamma > 0\), denote by \(x\) a real root of the quadratic equation \(\delta \gamma^{2}+\gamma x^{2}+x \delta^{2}=0\), which exists since the discriminant \(\delta^{4}-4 \delta \gamma^{3}\) is positive. Also \(x < 0\) since this equation cannot have non-negative root. For the point \(H_{\delta, \gamma}(x)=:(0, r) \in \Theta\) the first coordinate is 0 . The difference of coordinates equals \(-r=(\delta-\gamma)(\gamma-x)(x-\delta) < 0\), so \(r \neq 0\) as desired.

Now, let \((0, r) \in \Theta^{* }\). We get \(H_{0, r}(x)=\left(r x^{2}, r^{2} x\right) \in \Theta\). Thus \(f\left(r x^{2}\right)=f\left(r^{2} x\right)\) for all \(x \in \mathbb{R}\). Replacing \(x\) to \(-x\) we get \(f\left(r x^{2}\right)=f\left(r^{2} x\right)=f\left(-r^{2} x\right)\), so \(f\) is even: \((a,-a) \in \Theta\) for all \(a\). Then \(H_{a,-a}(x)=\left(a^{3}-a x^{2}+x a^{2},-a^{3}+a^{2} x+x^{2} a\right) \in \Theta\) for all real \(a, x\). Putting \(x=\frac{1+\sqrt{5}}{2} a\) we obtain \(\left(0,(1+\sqrt{5}) a^{3}\right) \in \Theta\) which means that \(f(y)=f(0)=0\) for every real \(y\).

Hereafter we assume that \(f\) is injective and \(f(0)=0\). By \(E(a, b, 0)\) we get
\[
f(a) f(b)(f(a)-f(b))=f\left(a^{2} b\right)-f\left(a b^{2}\right)
\]
Let \(\kappa:=f(1)\) and note that \(\kappa=f(1) \neq f(0)=0\) by injectivity. Putting \(b=1\) in \((1)\) we get
\[
\kappa f(a)(f(a)-\kappa)=f\left(a^{2}\right)-f(a)
\]
Subtracting the same equality for \(-a\) we get
\[
\kappa(f(a)-f(-a))(f(a)+f(-a)-\kappa)=f(-a)-f(a)
\]
Now, if \(a \neq 0\), by injectivity we get \(f(a)-f(-a) \neq 0\) and thus
\[
f(a)+f(-a)=\kappa-\kappa^{-1}=: \lambda
\]
It follows that
\[
f(a)-f(b)=f(-b)-f(-a)
\]
for all non-zero \(a, b\). Replace non-zero numbers \(a, b\) in \((1)\) with \(-a,-b\), respectively, and add the two equalities. Due to \((3)\) we get
\[
(f(a)-f(b))(f(a) f(b)-f(-a) f(-b))=0
\]
thus \(f(a) f(b)=f(-a) f(-b)=(\lambda-f(a))(\lambda-f(b))\) for all non-zero \(a \neq b\). If \(\lambda \neq 0\), this implies \(f(a)+f(b)=\lambda\) that contradicts injectivity when we vary \(b\) with fixed \(a\). Therefore, \(\lambda=0\) and \(\kappa=\pm 1\). Thus \(f\) is odd. Replacing \(f\) with \(-f\) if necessary (this preserves the original equation) we may suppose that \(f(1)=1\).
Now, \((2)\) yields \(f\left(a^{2}\right)=f^{2}(a)\). Summing relations \((1)\) for pairs \((a, b)\) and \((a,-b)\), we get \(-2 f(a) f^{2}(b)=-2 f\left(a b^{2}\right)\), i.e. \(f(a) f\left(b^{2}\right)=f\left(a b^{2}\right)\). Putting \(b=\sqrt{x}\) for each non-negative \(x\) we get \(f(a x)=f(a) f(x)\) for all real \(a\) and non-negative \(x\). Since \(f\) is odd, this multiplicativity relation is true for all \(a, x\). Also, from \(f\left(a^{2}\right)=f^{2}(a)\) we see that \(f(x) \geqslant 0\) for \(x \geqslant 0\). Next, \(f(x) > 0\) for \(x > 0\) by injectivity.
Assume that \(f(x)\) for \(x > 0\) does not have the form \(f(x)=x^{\tau}\) for a constant \(\tau\). The known property of multiplicative functions yields that the graph of \(f\) is dense on \((0, \infty)^{2}\). In particular, we may find positive \(b < 1 / 10\) for which \(f(b) > 1\). Also, such \(b\) can be found if \(f(x)=x^{\tau}\) for some \(\tau < 0\). Then for all \(x\) we have \(x^{2}+x b^{2}+b \geqslant 0\) and so \(E(1, b, x)\) implies that
\[
f\left(b^{2}+b x^{2}+x\right)=f\left(x^{2}+x b^{2}+b\right)+(f(b)-1)(f(x)-f(b))(f(x)-1) \geqslant 0-\left((f(b)-1)^{3} / 4\right.
\]
is bounded from below (the quadratic trinomial bound \((t-f(1))(t-f(b)) \geqslant-(f(b)-1)^{2} / 4\) for \(t=f(x)\) is used). Hence, \(f\) is bounded from below on \(\left(b^{2}-\frac{1}{4 b},+\infty\right)\), and since \(f\) is odd it is bounded from above on \(\left(0, \frac{1}{4 b}-b^{2}\right)\). This is absurd if \(f(x)=x^{\tau}\) for \(\tau < 0\), and contradicts to the above dense graph condition otherwise.
Therefore, \(f(x)=x^{\tau}\) for \(x > 0\) and some constant \(\tau > 0\). Dividing \(E(a, b, c)\) by \((a-b)(b-\) \(c)(c-a)=\left(a b^{2}+b c^{2}+c a^{2}\right)-\left(a^{2} b+b^{2} c+c^{2} a\right)\) and taking a limit when \(a, b, c\) all go to 1 (the divided ratios tend to the corresponding derivatives, say, \(\frac{a^{\tau}-b^{\tau}}{a-b} \rightarrow\left(x^{\tau}\right)_{x=1}^{\prime}=\tau\) ), we get \(\tau^{3}=\tau \cdot 3^{\tau-1}, \tau^{2}=3^{\tau-1}, F(\tau):=3^{\tau / 2-1 / 2}-\tau=0\). Since function \(F\) is strictly convex, it has at most two roots, and we get \(\tau \in\{1,3\}\).
