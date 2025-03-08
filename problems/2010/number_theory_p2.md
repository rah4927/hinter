---
id: fimo_2010_number_theory_p2
year: 2010
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2010 Number Theory Problem 2"
---

Find all pairs \((m, n)\) of nonnegative integers for which

\[
m^{2}+2 \cdot 3^{n}=m\left(2^{n+1}-1\right) .
\]

The final answers are \((6,3),(9,3),(9,5),(54,5)\).

---
For fixed values of \(n\), the equation (1) is a simple quadratic equation in \(m\). For \(n \leq 5\) the solutions are listed in the following table.

\begin{center}
\begin{tabular}{|l|l|l|l|}
\hline
case & equation & discriminant & integer roots \\
\hline
\(n=0\) & \(m^{2}-m+2=0\) & \(-7\) & none \\
\(n=1\) & \(m^{2}-3 m+6=0\) & \(-15\) & none \\
\(n=2\) & \(m^{2}-7 m+18=0\) & \(-23\) & none \\
\(n=3\) & \(m^{2}-15 m+54=0\) & 9 & \(m=6\) and \(m=9\) \\
\(n=4\) & \(m^{2}-31 m+162=0\) & 313 & none \\
\(n=5\) & \(m^{2}-63 m+486=0\) & \(2025=45^{2}\) & \(m=9\) and \(m=54\) \\
\hline
\end{tabular}
\end{center}

We prove that there is no solution for \(n \geq 6\).

Suppose that \((m, n)\) satisfies (1) and \(n \geq 6\). Since \(m \mid 2 \cdot 3^{n}=m\left(2^{n+1}-1\right)-m^{2}\), we have \(m=3^{p}\) with some \(0 \leq p \leq n\) or \(m=2 \cdot 3^{q}\) with some \(0 \leq q \leq n\).

In the first case, let \(q=n-p\); then

\[
2^{n+1}-1=m+\frac{2 \cdot 3^{n}}{m}=3^{p}+2 \cdot 3^{q}
\]

In the second case let \(p=n-q\). Then

\[
2^{n+1}-1=m+\frac{2 \cdot 3^{n}}{m}=2 \cdot 3^{q}+3^{p}
\]

Hence, in both cases we need to find the nonnegative integer solutions of

\[
3^{p}+2 \cdot 3^{q}=2^{n+1}-1, \quad p+q=n .
\]

Next, we prove bounds for \(p, q\). From (2) we get

\[
3^{p} < 2^{n+1}=8^{\frac{n+1}{3}} < 9^{\frac{n+1}{3}}=3^{\frac{2(n+1)}{3}}
\]

and

\[
2 \cdot 3^{q} < 2^{n+1}=2 \cdot 8^{\frac{n}{3}} < 2 \cdot 9^{\frac{n}{3}}=2 \cdot 3^{\frac{2 n}{3}} < 2 \cdot 3^{\frac{2(n+1)}{3}},
\]

so \(p, q < \frac{2(n+1)}{3}\). Combining these inequalities with \(p+q=n\), we obtain

\[
\frac{n-2}{3} < p, q < \frac{2(n+1)}{3} .
\]

Now let \(h=\min (p, q)\). By (3) we have \(h > \frac{n-2}{3}\); in particular, we have \(h > 1\). On the left-hand side of \((2)\), both terms are divisible by \(3^{h}\), therefore \(9\left|3^{h}\right| 2^{n+1}-1\). It is easy check that \(\operatorname{ord}_{9}(2)=6\), so \(9 \mid 2^{n+1}-1\) if and only if \(6 \mid n+1\). Therefore, \(n+1=6 r\) for some positive integer \(r\), and we can write

\[
2^{n+1}-1=4^{3 r}-1=\left(4^{2 r}+4^{r}+1\right)\left(2^{r}-1\right)\left(2^{r}+1\right) .
\]

Notice that the factor \(4^{2 r}+4^{r}+1=\left(4^{r}-1\right)^{2}+3 \cdot 4^{r}\) is divisible by 3 , but it is never divisible by 9 . The other two factors in (4), \(2^{r}-1\) and \(2^{r}+1\) are coprime: both are odd and their difference is 2 . Since the whole product is divisible by \(3^{h}\), we have either \(3^{h-1} \mid 2^{r}-1\) or \(3^{h-1} \mid 2^{r}+1\). In any case, we have \(3^{h-1} \leq 2^{r}+1\). Then

\[
\begin{gathered}
3^{h-1} \leq 2^{r}+1 \leq 3^{r}=3^{\frac{n+1}{6}} \\
\frac{n-2}{3}-1 < h-1 \leq \frac{n+1}{6} \\
n < 11 .
\end{gathered}
\]

But this is impossible since we assumed \(n \geq 6\), and we proved \(6 \mid n+1\).
