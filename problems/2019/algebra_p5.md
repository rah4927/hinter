---
id: fimo_2019_algebra_p5
year: 2019
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 5"
---

Let \(x_{1}, x_{2}, \ldots, x_{n}\) be different real numbers. Prove that
\[
\sum_{1 \leqslant i \leqslant n} \prod_{j \neq i} \frac{1-x_{i} x_{j}}{x_{i}-x_{j}}= \begin{cases}0, & \text { if } n \text { is even } \\ 1, & \text { if } n \text { is odd }\end{cases}
\]

---
Let \(G\left(x_{1}, x_{2}, \ldots, x_{n}\right)\) be the function of the \(n\) variables \(x_{1}, x_{2}, \ldots, x_{n}\) on the LHS of the required identity.
Since both sides of the identity are rational functions, it suffices to prove it when all \(x_{i} \notin\{\pm 1\}\). Define
\[
f(t)=\prod_{i=1}^{n}\left(1-x_{i} t\right)
\]
and note that
\[
f\left(x_{i}\right)=\left(1-x_{i}^{2}\right) \prod_{j \neq i} 1-x_{i} x_{j}
\]
Using the nodes \(+1,-1, x_{1}, \ldots, x_{n}\), the Lagrange interpolation formula gives us the following expression for \(f\) :
\[
\sum_{i=1}^{n} f\left(x_{i}\right) \frac{(x-1)(x+1)}{\left(x_{i}-1\right)\left(x_{i}+1\right)} \prod_{j \neq i} \frac{x-x_{j}}{x_{i}-x_{j}}+f(1) \frac{x+1}{1+1} \prod_{1 \leqslant i \leqslant n} \frac{x-x_{i}}{1-x_{i}}+f(-1) \frac{x-1}{-1-1} \prod_{1 \leqslant i \leqslant n} \frac{x-x_{i}}{1-x_{i}} .
\]
The coefficient of \(t^{n+1}\) in \(f(t)\) is 0 , since \(f\) has degree \(n\). The coefficient of \(t^{n+1}\) in the above expression of \(f\) is
\[
\begin{aligned}
0 & =\sum_{1 \leqslant i \leqslant n} \frac{f\left(x_{i}\right)}{\prod_{j \neq i}\left(x_{i}-x_{j}\right) \cdot\left(x_{i}-1\right)\left(x_{i}+1\right)}+\frac{f(1)}{\prod_{1 \leqslant j \leqslant n}\left(1-x_{j}\right) \cdot(1+1)}+\frac{f(-1)}{\prod_{1 \leqslant j \leqslant n}\left(-1-x_{j}\right) \cdot(-1-1)} \\
& =-G\left(x_{1}, \ldots, x_{n}\right)+\frac{1}{2}+\frac{(-1)^{n+1}}{2} .
\end{aligned}
\]
