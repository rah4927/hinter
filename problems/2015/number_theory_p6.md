---
id: fimo_2015_number_theory_p6
year: 2015
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 6"
---

Let \(\mathbb{Z}_{ > 0}\) denote the set of positive integers. Consider a function \(f: \mathbb{Z}_{ > 0} \rightarrow \mathbb{Z}_{ > 0}\). For any \(m, n \in \mathbb{Z}_{ > 0}\) we write \(f^{n}(m)=\underbrace{f(f(\ldots f}_{n}(m) \ldots))\). Suppose that \(f\) has the following two properties:
(i) If \(m, n \in \mathbb{Z}_{ > 0}\), then \(\frac{f^{n}(m)-m}{n} \in \mathbb{Z}_{ > 0}\);
(ii) The set \(\mathbb{Z}_{ > 0} \backslash\left\{f(n) \mid n \in \mathbb{Z}_{ > 0}\right\}\) is finite.
Prove that the sequence \(f(1)-1, f(2)-2, f(3)-3, \ldots\) is periodic.

---
We split the solution into three steps. In the first of them, we show that the function \(f\) is injective and explain how this leads to a useful visualization of \(f\). Then comes the second step, in which most of the work happens: its goal is to show that for any \(n \in \mathbb{Z}_{ > 0}\) the sequence \(n, f(n), f^{2}(n), \ldots\) is an arithmetic progression. Finally, in the third step we put everything together, thus solving the problem.
Step 1. We commence by checking that \(f\) is injective. For this purpose, we consider any \(\overline{m, k \in \mathbb{Z}_{ > 0}}\) with \(f(m)=f(k)\). By \((i)\), every positive integer \(n\) has the property that
\[
\frac{k-m}{n}=\frac{f^{n}(m)-m}{n}-\frac{f^{n}(k)-k}{n}
\]
is a difference of two integers and thus integral as well. But for \(n=|k-m|+1\) this is only possible if \(k=m\). Thereby, the injectivity of \(f\) is established.
Now recall that due to condition \((i i)\) there are finitely many positive integers \(a_{1}, \ldots, a_{k}\) such that \(\mathbb{Z}_{ > 0}\) is the disjoint union of \(\left\{a_{1}, \ldots, a_{k}\right\}\) and \(\left\{f(n) \mid n \in \mathbb{Z}_{ > 0}\right\}\). Notice that by plugging \(n=1\) into condition \((i)\) we get \(f(m) > m\) for all \(m \in \mathbb{Z}_{ > 0}\).
We contend that every positive integer \(n\) may be expressed uniquely in the form \(n=f^{j}\left(a_{i}\right)\) for some \(j \geqslant 0\) and \(i \in\{1, \ldots, k\}\). The uniqueness follows from the injectivity of \(f\). The existence can be proved by induction on \(n\) in the following way. If \(n \in\left\{a_{1}, \ldots, a_{k}\right\}\), then we may take \(j=0\); otherwise there is some \(n^{\prime} < n\) with \(f\left(n^{\prime}\right)=n\) to which the induction hypothesis may be applied.
The result of the previous paragraph means that every positive integer appears exactly once in the following infinite picture, henceforth referred to as "the Table":
\begin{center}
\begin{tabular}{|c|c|c|c|c}
\hline
\(a_{1}\) & \(f\left(a_{1}\right)\) & \(f^{2}\left(a_{1}\right)\) & \(f^{3}\left(a_{1}\right)\) & \(\ldots\) \\
\hline
\(a_{2}\) & \(f\left(a_{2}\right)\) & \(f^{2}\left(a_{2}\right)\) & \(f^{3}\left(a_{2}\right)\) & \(\ldots\) \\
\hline
\(\vdots\) & \(\vdots\) & \(\vdots\) & \(\vdots\) & \\
\hline
\(a_{k}\) & \(f\left(a_{k}\right)\) & \(f^{2}\left(a_{k}\right)\) & \(f^{3}\left(a_{k}\right)\) & \(\ldots\) \\
\hline
\end{tabular}
\end{center}
The Table
Step 2. Our next goal is to prove that each row of the Table is an arithmetic progression. Assume contrariwise that the number \(t\) of rows which are arithmetic progressions would satisfy \(0 \leqslant t < k\). By permuting the rows if necessary we may suppose that precisely the first \(t\) rows are arithmetic progressions, say with steps \(T_{1}, \ldots, T_{t}\). Our plan is to find a further row that is "not too sparse" in an asymptotic sense, and then to prove that such a row has to be an arithmetic progression as well.
Let us write \(T=\operatorname{lcm}\left(T_{1}, T_{2}, \ldots, T_{t}\right)\) and \(A=\max \left\{a_{1}, a_{2}, \ldots, a_{t}\right\}\) if \(t > 0\); and \(T=1\) and \(A=0\) if \(t=0\). For every integer \(n \geqslant A\), the interval \(\Delta_{n}=[n+1, n+T]\) contains exactly \(T / T_{i}\) elements of the \(i^{\text {th }}\) row \((1 \leqslant i \leqslant t)\). Therefore, the number of elements from the last \((k-t)\) rows of the Table contained in \(\Delta_{n}\) does not depend on \(n \geqslant A\). It is not possible that none of these intervals \(\Delta_{n}\) contains an element from the \(k-t\) last rows, because infinitely many numbers appear in these rows. It follows that for each \(n \geqslant A\) the interval \(\Delta_{n}\) contains at least one member from these rows.
This yields that for every positive integer \(d\), the interval \([A+1, A+(d+1)(k-t) T]\) contains at least \((d+1)(k-t)\) elements from the last \(k-t\) rows; therefore, there exists an index \(x\) with \(t+1 \leqslant x \leqslant k\), possibly depending on \(d\), such that our interval contains at least \(d+1\) elements from the \(x^{\text {th }}\) row. In this situation we have
\[
f^{d}\left(a_{x}\right) \leqslant A+(d+1)(k-t) T .
\]
Finally, since there are finitely many possibilities for \(x\), there exists an index \(x \geqslant t+1\) such that the set
\[
X=\left\{d \in \mathbb{Z}_{ > 0} \mid f^{d}\left(a_{x}\right) \leqslant A+(d+1)(k-t) T\right\}
\]
is infinite. Thereby we have found the "dense row" promised above.
By assumption \((i)\), for every \(d \in X\) the number
\[
\beta_{d}=\frac{f^{d}\left(a_{x}\right)-a_{x}}{d}
\]
is a positive integer not exceeding
\[
\frac{A+(d+1)(k-t) T}{d} \leqslant \frac{A d+2 d(k-t) T}{d}=A+2(k-t) T .
\]
This leaves us with finitely many choices for \(\beta_{d}\), which means that there exists a number \(T_{x}\) such that the set
\[
Y=\left\{d \in X \mid \beta_{d}=T_{x}\right\}
\]
is infinite. Notice that we have \(f^{d}\left(a_{x}\right)=a_{x}+d \cdot T_{x}\) for all \(d \in Y\).
Now we are prepared to prove that the numbers in the \(x^{\text {th }}\) row form an arithmetic progression, thus coming to a contradiction with our assumption. Let us fix any positive integer \(j\). Since the set \(Y\) is infinite, we can choose a number \(y \in Y\) such that \(y-j > \left|f^{j}\left(a_{x}\right)-\left(a_{x}+j T_{x}\right)\right|\). Notice that both numbers
\[
f^{y}\left(a_{x}\right)-f^{j}\left(a_{x}\right)=f^{y-j}\left(f^{j}\left(a_{x}\right)\right)-f^{j}\left(a_{x}\right) \quad \text { and } \quad f^{y}\left(a_{x}\right)-\left(a_{x}+j T_{x}\right)=(y-j) T_{x}
\]
are divisible by \(y-j\). Thus, the difference between these numbers is also divisible by \(y-j\). Since the absolute value of this difference is less than \(y-j\), it has to vanish, so we get \(f^{j}\left(a_{x}\right)=\) \(a_{x}+j \cdot T_{x}\).
Hence, it is indeed true that all rows of the Table are arithmetic progressions.
Step 3. Keeping the above notation in force, we denote the step of the \(i^{\text {th }}\) row of the table by \(T_{i}\). Now we claim that we have \(f(n)-n=f(n+T)-(n+T)\) for all \(n \in \mathbb{Z}_{ > 0}\), where
\[
T=\operatorname{lcm}\left(T_{1}, \ldots, T_{k}\right) .
\]
To see this, let any \(n \in \mathbb{Z}_{ > 0}\) be given and denote the index of the row in which it appears in the Table by \(i\). Then we have \(f^{j}(n)=n+j \cdot T_{i}\) for all \(j \in \mathbb{Z}_{ > 0}\), and thus indeed
\[
f(n+T)-f(n)=f^{1+T / T_{i}}(n)-f(n)=\left(n+T+T_{i}\right)-\left(n+T_{i}\right)=T .
\]
This concludes the solution.
