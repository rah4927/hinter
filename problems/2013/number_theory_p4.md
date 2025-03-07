---
id: fimo_2013_number_theory_p4
year: 2013
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 4"
---

Determine whether there exists an infinite sequence of nonzero digits \(a_{1}, a_{2}, a_{3}, \ldots\) and a positive integer \(N\) such that for every integer \(k > N\), the number \(\overline{a_{k} a_{k-1} \ldots a_{1}}\) is a perfect square.


---
Assume that \(a_{1}, a_{2}, a_{3}, \ldots\) is such a sequence. For each positive integer \(k\), let \(y_{k}=\) \(\overline{a_{k} a_{k-1} \ldots a_{1}}\). By the assumption, for each \(k > N\) there exists a positive integer \(x_{k}\) such that \(y_{k}=x_{k}^{2}\).
I. For every \(n\), let \(5^{\gamma_{n}}\) be the greatest power of 5 dividing \(x_{n}\). Let us show first that \(2 \gamma_{n} \geqslant n\) for every positive integer \(n > N\).
Assume, to the contrary, that there exists a positive integer \(n > N\) such that \(2 \gamma_{n} < n\), which yields
\[
y_{n+1}=\overline{a_{n+1} a_{n} \ldots a_{1}}=10^{n} a_{n+1}+\overline{a_{n} a_{n-1} \ldots a_{1}}=10^{n} a_{n+1}+y_{n}=5^{2 \gamma_{n}}\left(2^{n} 5^{n-2 \gamma_{n}} a_{n+1}+\frac{y_{n}}{5^{2 \gamma_{n}}}\right) .
\]
Since \(5 \backslash y_{n} / 5^{2 \gamma_{n}}\), we obtain \(\gamma_{n+1}=\gamma_{n} < n < n+1\). By the same arguments we obtain that \(\gamma_{n}=\gamma_{n+1}=\gamma_{n+2}=\ldots\). Denote this common value by \(\gamma\).
Now, for each \(k \geqslant n\) we have
\[
\left(x_{k+1}-x_{k}\right)\left(x_{k+1}+x_{k}\right)=x_{k+1}^{2}-x_{k}^{2}=y_{k+1}-y_{k}=a_{k+1} \cdot 10^{k} .
\]
One of the numbers \(x_{k+1}-x_{k}\) and \(x_{k+1}+x_{k}\) is not divisible by \(5^{\gamma+1}\) since otherwise one would have \(5^{\gamma+1} \mid\left(\left(x_{k+1}-x_{k}\right)+\left(x_{k+1}+x_{k}\right)\right)=2 x_{k+1}\). On the other hand, we have \(5^{k} \mid\left(x_{k+1}-x_{k}\right)\left(x_{k+1}+x_{k}\right)\), so \(5^{k-\gamma}\) divides one of these two factors. Thus we get
\[
5^{k-\gamma} \leqslant \max \left\{x_{k+1}-x_{k}, x_{k+1}+x_{k}\right\} < 2 x_{k+1}=2 \sqrt{y_{k+1}} < 2 \cdot 10^{(k+1) / 2},
\]
which implies \(5^{2 k} < 4 \cdot 5^{2 \gamma} \cdot 10^{k+1}\), or \((5 / 2)^{k} < 40 \cdot 5^{2 \gamma}\). The last inequality is clearly false for sufficiently large values of \(k\). This contradiction shows that \(2 \gamma_{n} \geqslant n\) for all \(n > N\).
II. Consider now any integer \(k > \max \{N / 2,2\}\). Since \(2 \gamma_{2 k+1} \geqslant 2 k+1\) and \(2 \gamma_{2 k+2} \geqslant 2 k+2\), we have \(\gamma_{2 k+1} \geqslant k+1\) and \(\gamma_{2 k+2} \geqslant k+1\). So, from \(y_{2 k+2}=a_{2 k+2} \cdot 10^{2 k+1}+y_{2 k+1}\) we obtain \(5^{2 k+2} \mid y_{2 k+2}-y_{2 k+1}=a_{2 k+2} \cdot 10^{2 k+1}\) and thus \(5 \mid a_{2 k+2}\), which implies \(a_{2 k+2}=5\). Therefore,
\[
\left(x_{2 k+2}-x_{2 k+1}\right)\left(x_{2 k+2}+x_{2 k+1}\right)=x_{2 k+2}^{2}-x_{2 k+1}^{2}=y_{2 k+2}-y_{2 k+1}=5 \cdot 10^{2 k+1}=2^{2 k+1} \cdot 5^{2 k+2} .
\]
Setting \(A_{k}=x_{2 k+2} / 5^{k+1}\) and \(B_{k}=x_{2 k+1} / 5^{k+1}\), which are integers, we obtain
\[
\left(A_{k}-B_{k}\right)\left(A_{k}+B_{k}\right)=2^{2 k+1} .
\]
Both \(A_{k}\) and \(B_{k}\) are odd, since otherwise \(y_{2 k+2}\) or \(y_{2 k+1}\) would be a multiple of 10 which is false by \(a_{1} \neq 0\); so one of the numbers \(A_{k}-B_{k}\) and \(A_{k}+B_{k}\) is not divisible by 4 . Therefore (1) yields \(A_{k}-B_{k}=2\) and \(A_{k}+B_{k}=2^{2 k}\), hence \(A_{k}=2^{2 k-1}+1\) and thus
\[
x_{2 k+2}=5^{k+1} A_{k}=10^{k+1} \cdot 2^{k-2}+5^{k+1} > 10^{k+1} \text {, }
\]
since \(k \geqslant 2\). This implies that \(y_{2 k+2} > 10^{2 k+2}\) which contradicts the fact that \(y_{2 k+2}\) contains \(2 k+2\) digits. The desired result follows.
