---
id: fimo_2007_algebra_p4
year: 2007
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 4"
---

Find all functions \(f: \mathbb{R}^{+} \rightarrow \mathbb{R}^{+}\)such that
\[
f(x+f(y))=f(x+y)+f(y)
\]
for all \(x, y \in \mathbb{R}^{+}\). (Symbol \(\mathbb{R}^{+}\)denotes the set of all positive real numbers.)


---
First we show that \(f(y) > y\) for all \(y \in \mathbb{R}^{+}\). Functional equation (1) yields \(f(x+f(y)) > f(x+y)\) and hence \(f(y) \neq y\) immediately. If \(f(y) < y\) for some \(y\), then setting \(x=y-f(y)\) we get
\[
f(y)=f((y-f(y))+f(y))=f((y-f(y))+y)+f(y) > f(y)
\]
contradiction. Therefore \(f(y) > y\) for all \(y \in \mathbb{R}^{+}\).
For \(x \in \mathbb{R}^{+}\)define \(g(x)=f(x)-x\); then \(f(x)=g(x)+x\) and, as we have seen, \(g(x) > 0\). Transforming (1) for function \(g(x)\) and setting \(t=x+y\),
\[
\begin{aligned}
f(t+g(y)) & =f(t)+f(y) \\
g(t+g(y))+t+g(y) & =(g(t)+t)+(g(y)+y)
\end{aligned}
\]
and therefore
\[
g(t+g(y))=g(t)+y \quad \text { for all } t > y > 0
\]
Next we prove that function \(g(x)\) is injective. Suppose that \(g\left(y_{1}\right)=g\left(y_{2}\right)\) for some numbers \(y_{1}, y_{2} \in \mathbb{R}^{+}\). Then by \((2)\)
\[
g(t)+y_{1}=g\left(t+g\left(y_{1}\right)\right)=g\left(t+g\left(y_{2}\right)\right)=g(t)+y_{2}
\]
for all \(t > \max \left\{y_{1}, y_{2}\right\}\). Hence, \(g\left(y_{1}\right)=g\left(y_{2}\right)\) is possible only if \(y_{1}=y_{2}\).
Now let \(u, v\) be arbitrary positive numbers and \(t > u+v\). Applying (2) three times,
\[
g(t+g(u)+g(v))=g(t+g(u))+v=g(t)+u+v=g(t+g(u+v)) .
\]
By the injective property we conclude that \(t+g(u)+g(v)=t+g(u+v)\), hence
\[
g(u)+g(v)=g(u+v) .
\]
Since function \(g(v)\) is positive, equation (3) also shows that \(g\) is an increasing function.
Finally we prove that \(g(x)=x\). Combining \((2)\) and (3), we obtain
\[
g(t)+y=g(t+g(y))=g(t)+g(g(y))
\]
and hence
\[
g(g(y))=y .
\]
Suppose that there exists an \(x \in \mathbb{R}^{+}\)such that \(g(x) \neq x\). By the monotonicity of \(g\), if \(x > g(x)\) then \(g(x) > g(g(x))=x\). Similarly, if \(x < g(x)\) then \(g(x) < g(g(x))=x\). Both cases lead to contradiction, so there exists no such \(x\).
We have proved that \(g(x)=x\) and therefore \(f(x)=g(x)+x=2 x\) for all \(x \in \mathbb{R}^{+}\). This function indeed satisfies the functional equation (1).
