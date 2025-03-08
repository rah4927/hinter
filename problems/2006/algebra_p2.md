---
id: fimo_2006_algebra_p2
year: 2006
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2006 Algebra Problem 2"
---

The sequence of real numbers \(a_{0}, a_{1}, a_{2}, \ldots\) is defined recursively by
\[
a_{0}=-1, \quad \sum_{k=0}^{n} \frac{a_{n-k}}{k+1}=0 \quad \text { for } \quad n \geq 1 .
\]
Show that \(a_{n} > 0\) for \(n \geq 1\)

---
The proof goes by induction. For \(n=1\) the formula yields \(a_{1}=1 / 2\). Take \(n \geq 1\), assume \(a_{1}, \ldots, a_{n} > 0\) and write the recurrence formula for \(n\) and \(n+1\), respectively as
\[
\sum_{k=0}^{n} \frac{a_{k}}{n-k+1}=0 \quad \text { and } \quad \sum_{k=0}^{n+1} \frac{a_{k}}{n-k+2}=0 .
\]
Subtraction yields
\[
\begin{aligned}
0=(n+2) \sum_{k=0}^{n+1} \frac{a_{k}}{n-k+2}-(n+1) \sum_{k=0}^{n} \frac{a_{k}}{n-k+1} \\
=(n+2) a_{n+1}+\sum_{k=0}^{n}\left(\frac{n+2}{n-k+2}-\frac{n+1}{n-k+1}\right) a_{k} .
\end{aligned}
\]
The coefficient of \(a_{0}\) vanishes, so
\[
a_{n+1}=\frac{1}{n+2} \sum_{k=1}^{n}\left(\frac{n+1}{n-k+1}-\frac{n+2}{n-k+2}\right) a_{k}=\frac{1}{n+2} \sum_{k=1}^{n} \frac{k}{(n-k+1)(n-k+2)} a_{k} .
\]
The coefficients of \(a_{1}, \ldots, a_{n}\) are all positive. Therefore, \(a_{1}, \ldots, a_{n} > 0\) implies \(a_{n+1} > 0\).
