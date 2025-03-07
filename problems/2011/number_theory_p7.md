---
id: fimo_2011_number_theory_p7
year: 2011
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2011 Number Theory Problem 7"
---

Let \(p\) be an odd prime number. For every integer \(a\), define the number
\[
S_{a}=\frac{a}{1}+\frac{a^{2}}{2}+\cdots+\frac{a^{p-1}}{p-1} .
\]
Let \(m\) and \(n\) be integers such that
\[
S_{3}+S_{4}-3 S_{2}=\frac{m}{n} .
\]
Prove that \(p\) divides \(m\).

---
For rational numbers \(p_{1} / q_{1}\) and \(p_{2} / q_{2}\) with the denominators \(q_{1}, q_{2}\) not divisible by \(p\), we write \(p_{1} / q_{1} \equiv p_{2} / q_{2}(\bmod p)\) if the numerator \(p_{1} q_{2}-p_{2} q_{1}\) of their difference is divisible by \(p\).
We start with finding an explicit formula for the residue of \(S_{a}\) modulo \(p\). Note first that for every \(k=1, \ldots, p-1\) the number \(\left(\begin{array}{l}p \\ k\end{array}\right)\) is divisible by \(p\), and
\[
\frac{1}{p}\left(\begin{array}{l}
p \\
k
\end{array}\right)=\frac{(p-1)(p-2) \cdots(p-k+1)}{k !} \equiv \frac{(-1) \cdot(-2) \cdots(-k+1)}{k !}=\frac{(-1)^{k-1}}{k} \quad(\bmod p)
\]
Therefore, we have
\[
S_{a}=-\sum_{k=1}^{p-1} \frac{(-a)^{k}(-1)^{k-1}}{k} \equiv-\sum_{k=1}^{p-1}(-a)^{k} \cdot \frac{1}{p}\left(\begin{array}{l}
p \\
k
\end{array}\right) \quad(\bmod p) .
\]
The number on the right-hand side is integer. Using the binomial formula we express it as
\[
-\sum_{k=1}^{p-1}(-a)^{k} \cdot \frac{1}{p}\left(\begin{array}{l}
p \\
k
\end{array}\right)=-\frac{1}{p}\left(-1-(-a)^{p}+\sum_{k=0}^{p}(-a)^{k}\left(\begin{array}{l}
p \\
k
\end{array}\right)\right)=\frac{(a-1)^{p}-a^{p}+1}{p}
\]
since \(p\) is odd. So, we have
\[
S_{a} \equiv \frac{(a-1)^{p}-a^{p}+1}{p} \quad(\bmod p) .
\]
Finally, using the obtained formula we get
\[
\begin{aligned}
S_{3}+S_{4}-3 S_{2} & \equiv \frac{\left(2^{p}-3^{p}+1\right)+\left(3^{p}-4^{p}+1\right)-3\left(1^{p}-2^{p}+1\right)}{p} \\
& =\frac{4 \cdot 2^{p}-4^{p}-4}{p}=-\frac{\left(2^{p}-2\right)^{2}}{p} \quad(\bmod p) .
\end{aligned}
\]
By FERMAT's theorem, \(p \mid 2^{p}-2\), so \(p^{2} \mid\left(2^{p}-2\right)^{2}\) and hence \(S_{3}+S_{4}-3 S_{2} \equiv 0(\bmod p)\).
