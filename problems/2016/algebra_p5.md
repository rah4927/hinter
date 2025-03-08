---
id: fimo_2016_algebra_p5_1
year: 2016
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 5"
---

Prove that for every positive integer \(n\), there exists a fraction \(\frac{a}{b}\) where \(a\) and \(b\) are integers satisfying \(0 < b \leqslant \sqrt{n}+1\) and \(\sqrt{n} \leqslant \frac{a}{b} \leqslant \sqrt{n+1}\).

---
Let \(r\) be the unique positive integer for which \(r^{2} \leqslant n < (r+1)^{2}\). Write \(n=r^{2}+s\). Then we have \(0 \leqslant s \leqslant 2 r\). We discuss in two cases according to the parity of \(s\).

\begin{itemize}
 \item Case 1. \(s\) is even.
\end{itemize}

Consider the number \(\left(r+\frac{s}{2 r}\right)^{2}=r^{2}+s+\left(\frac{s}{2 r}\right)^{2}\). We find that

\[
n=r^{2}+s \leqslant r^{2}+s+\left(\frac{s}{2 r}\right)^{2} \leqslant r^{2}+s+1=n+1
\]

It follows that

\[
\sqrt{n} \leqslant r+\frac{s}{2 r} \leqslant \sqrt{n+1}
\]

Since \(s\) is even, we can choose the fraction \(r+\frac{s}{2 r}=\frac{r^{2}+(s / 2)}{r}\) since \(r \leqslant \sqrt{n}\).

\begin{itemize}
 \item Case 2. \(s\) is odd.
\end{itemize}

Consider the number \(\left(r+1-\frac{2 r+1-s}{2(r+1)}\right)^{2}=(r+1)^{2}-(2 r+1-s)+\left(\frac{2 r+1-s}{2(r+1)}\right)^{2}\). We find that

\[
\begin{aligned}
n=r^{2}+s=(r+1)^{2}-(2 r+1-s) & \leqslant(r+1)^{2}-(2 r+1-s)+\left(\frac{2 r+1-s}{2(r+1)}\right)^{2} \\
& \leqslant(r+1)^{2}-(2 r+1-s)+1=n+1 .
\end{aligned}
\]

It follows that

\[
\sqrt{n} \leqslant r+1-\frac{2 r+1-s}{2(r+1)} \leqslant \sqrt{n+1}
\]

Since \(s\) is odd, we can choose the fraction \((r+1)-\frac{2 r+1-s}{2(r+1)}=\frac{(r+1)^{2}-r+((s-1) / 2)}{r+1}\) since \(r+1 \leqslant \sqrt{n}+1\)
