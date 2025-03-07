---
id: fimo_2008_number_theory_p3
year: 2008
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 3"
---

Let \(a_{0}, a_{1}, a_{2}, \ldots\) be a sequence of positive integers such that the greatest common divisor of any two consecutive terms is greater than the preceding term; in symbols, \(\operatorname{gcd}\left(a_{i}, a_{i+1}\right) > a_{i-1}\). Prove that \(a_{n} \geq 2^{n}\) for all \(n \geq 0\).


---
Since \(a_{i} \geq \operatorname{gcd}\left(a_{i}, a_{i+1}\right) > a_{i-1}\), the sequence is strictly increasing. In particular \(a_{0} \geq 1, a_{1} \geq 2\). For each \(i \geq 1\) we also have \(a_{i+1}-a_{i} \geq \operatorname{gcd}\left(a_{i}, a_{i+1}\right) > a_{i-1}\), and consequently \(a_{i+1} \geq a_{i}+a_{i-1}+1\). Hence \(a_{2} \geq 4\) and \(a_{3} \geq 7\). The equality \(a_{3}=7\) would force equalities in the previous estimates, leading to \(\operatorname{gcd}\left(a_{2}, a_{3}\right)=\operatorname{gcd}(4,7) > a_{1}=2\), which is false. Thus \(a_{3} \geq 8\); the result is valid for \(n=0,1,2,3\). These are the base cases for a proof by induction.
Take an \(n \geq 3\) and assume that \(a_{i} \geq 2^{i}\) for \(i=0,1, \ldots, n\). We must show that \(a_{n+1} \geq 2^{n+1}\). Let \(\operatorname{gcd}\left(a_{n}, a_{n+1}\right)=d\). We know that \(d > a_{n-1}\). The induction claim is reached immediately in the following cases:
\[
\begin{aligned}
& \text { if } a_{n+1} \geq 4 d \text { then } a_{n+1} > 4 a_{n-1} \geq 4 \cdot 2^{n-1}=2^{n+1} \text {; } \\
& \text { if } a_{n} \geq 3 d \text { then } a_{n+1} \geq a_{n}+d \geq 4 d > 4 a_{n-1} \geq 4 \cdot 2^{n-1}=2^{n+1} \text {; } \\
& \text { if } a_{n}=d \quad \text { then } a_{n+1} \geq a_{n}+d=2 a_{n} \geq 2 \cdot 2^{n}=2^{n+1} \text {. }
\end{aligned}
\]
The only remaining possibility is that \(a_{n}=2 d\) and \(a_{n+1}=3 d\), which we assume for the sequel. So \(a_{n+1}=\frac{3}{2} a_{n}\).
Let now \(\operatorname{gcd}\left(a_{n-1}, a_{n}\right)=d^{\prime}\); then \(d^{\prime} > a_{n-2}\). Write \(a_{n}=m d^{\prime} \quad(m\) an integer). Keeping in mind that \(d^{\prime} \leq a_{n-1} < d\) and \(a_{n}=2 d\), we get that \(m \geq 3\). Also \(a_{n-1} < d=\frac{1}{2} m d^{\prime}\), \(a_{n+1}=\frac{3}{2} m d^{\prime}\). Again we single out the cases which imply the induction claim immediately:
\[
\begin{aligned}
& \text { if } m \geq 6 \quad \text { then } a_{n+1}=\frac{3}{2} m d^{\prime} \geq 9 d^{\prime} > 9 a_{n-2} \geq 9 \cdot 2^{n-2} > 2^{n+1} \\
& \text { if } 3 \leq m \leq 4 \text { then } a_{n-1} < \frac{1}{2} \cdot 4 d^{\prime}, \text { and hence } a_{n-1}=d^{\prime}, \\
& a_{n+1}=\frac{3}{2} m a_{n-1} \geq \frac{3}{2} \cdot 3 a_{n-1} \geq \frac{9}{2} \cdot 2^{n-1} > 2^{n+1} .
\end{aligned}
\]
So we are left with the case \(m=5\), which means that \(a_{n}=5 d^{\prime}, a_{n+1}=\frac{15}{2} d^{\prime}, a_{n-1} < d=\frac{5}{2} d^{\prime}\). The last relation implies that \(a_{n-1}\) is either \(d^{\prime}\) or \(2 d^{\prime}\). Anyway, \(a_{n-1} \mid 2 d^{\prime}\).
The same pattern repeats once more. We denote \(\operatorname{gcd}\left(a_{n-2}, a_{n-1}\right)=d^{\prime \prime}\); then \(d^{\prime \prime} > a_{n-3}\). Because \(d^{\prime \prime}\) is a divisor of \(a_{n-1}\), hence also of \(2 d^{\prime}\), we may write \(2 d^{\prime}=m^{\prime} d^{\prime \prime} \quad\left(m^{\prime}\right.\) an integer). Since \(d^{\prime \prime} \leq a_{n-2} < d^{\prime}\), we get \(m^{\prime} \geq 3\). Also, \(a_{n-2} < d^{\prime}=\frac{1}{2} m^{\prime} d^{\prime \prime}, \quad a_{n+1}=\frac{15}{2} d^{\prime}=\frac{15}{4} m^{\prime} d^{\prime \prime}\). As before, we consider the cases:
\[
\begin{aligned}
& \text { if } m^{\prime} \geq 5 \text { then } a_{n+1}=\frac{15}{4} m^{\prime} d^{\prime \prime} \geq \frac{75}{4} d^{\prime \prime} > \frac{75}{4} a_{n-3} \geq \frac{75}{4} \cdot 2^{n-3} > 2^{n+1} \\
& \text { if } 3 \leq m^{\prime} \leq 4 \text { then } a_{n-2} < \frac{1}{2} \cdot 4 d^{\prime \prime} \text {, and hence } a_{n-2}=d^{\prime \prime} \\
& \qquad a_{n+1}=\frac{15}{4} m^{\prime} a_{n-2} \geq \frac{15}{4} \cdot 3 a_{n-2} \geq \frac{45}{4} \cdot 2^{n-2} > 2^{n+1} .
\end{aligned}
\]
Both of them have produced the induction claim. But now there are no cases left. Induction is complete; the inequality \(a_{n} \geq 2^{n}\) holds for all \(n\).
