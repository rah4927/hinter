---
id: fimo_2007_number_theory_p4
year: 2007
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2007 Number Theory Problem 4"
---

For every integer \(k \geq 2\), prove that \(2^{3 k}\) divides the number
\[
\left(\begin{array}{c}
2^{k+1} \\
2^{k}
\end{array}\right)-\left(\begin{array}{c}
2^{k} \\
2^{k-1}
\end{array}\right)
\]
but \(2^{3 k+1}\) does not.

---
We use the notation \((2 n-1) ! !=1 \cdot 3 \cdots(2 n-1)\) and \((2 n) ! !=2 \cdot 4 \cdots(2 n)=2^{n} n\) ! for any positive integer \(n\). Observe that \((2 n) !=(2 n) ! !(2 n-1) ! !=2^{n} n !(2 n-1) ! !\).
For any positive integer \(n\) we have
\[
\begin{aligned}
\left(\begin{array}{c}
4 n \\
2 n
\end{array}\right) & =\frac{(4 n) !}{(2 n) !^{2}}=\frac{2^{2 n}(2 n) !(4 n-1) ! !}{(2 n) !^{2}}=\frac{2^{2 n}}{(2 n) !}(4 n-1) ! ! \\
\left(\begin{array}{c}
2 n \\
n
\end{array}\right) & =\frac{1}{(2 n) !}\left(\frac{(2 n) !}{n !}\right)^{2}=\frac{1}{(2 n) !}\left(2^{n}(2 n-1) ! !\right)^{2}=\frac{2^{2 n}}{(2 n) !}(2 n-1) ! !^{2}
\end{aligned}
\]
Then expression (1) can be rewritten as follows:
\[
\begin{aligned}
\left(\begin{array}{c}
2^{k+1} \\
2^{k}
\end{array}\right) & -\left(\begin{array}{c}
2^{k} \\
2^{k-1}
\end{array}\right)=\frac{2^{2^{k}}}{\left(2^{k}\right) !}\left(2^{k+1}-1\right) ! !-\frac{2^{2^{k}}}{\left(2^{k}\right) !}\left(2^{k}-1\right) ! !^{2} \\
& =\frac{2^{2^{k}}\left(2^{k}-1\right) ! !}{\left(2^{k}\right) !} \cdot\left(\left(2^{k}+1\right)\left(2^{k}+3\right) \ldots\left(2^{k}+2^{k}-1\right)-\left(2^{k}-1\right)\left(2^{k}-3\right) \ldots\left(2^{k}-2^{k}+1\right)\right) .
\end{aligned}
\]
We compute the exponent of 2 in the prime decomposition of each factor (the first one is a rational number but not necessarily an integer; it is not important).
First, we show by induction on \(n\) that the exponent of 2 in \(\left(2^{n}\right)\) ! is \(2^{n}-1\). The base case \(n=1\) is trivial. Suppose that \(\left(2^{n}\right) !=2^{2^{n}-1}(2 d+1)\) for some integer \(d\). Then we have
\[
\left(2^{n+1}\right) !=2^{2^{n}}\left(2^{n}\right) !\left(2^{n+1}-1\right) ! !=2^{2^{n}} 2^{2^{n}-1} \cdot(2 d+1)\left(2^{n+1}-1\right) ! !=2^{2^{n+1}-1} \cdot(2 q+1)
\]
for some integer \(q\). This finishes the induction step.
Hence, the exponent of 2 in the first factor in \((2)\) is \(2^{k}-\left(2^{k}-1\right)=1\).
The second factor in (2) can be considered as the value of the polynomial
\[
P(x)=(x+1)(x+3) \ldots\left(x+2^{k}-1\right)-(x-1)(x-3) \ldots\left(x-2^{k}+1\right) .
\]
at \(x=2^{k}\). Now we collect some information about \(P(x)\).
Observe that \(P(-x)=-P(x)\), since \(k \geq 2\). So \(P(x)\) is an odd function, and it has nonzero coefficients only at odd powers of \(x\). Hence \(P(x)=x^{3} Q(x)+c x\), where \(Q(x)\) is a polynomial with integer coefficients.
Compute the exponent of 2 in \(c\). We have
\[
\begin{aligned}
c & =2\left(2^{k}-1\right) ! ! \sum_{i=1}^{2^{k-1}} \frac{1}{2 i-1}=\left(2^{k}-1\right) ! ! \sum_{i=1}^{2^{k-1}}\left(\frac{1}{2 i-1}+\frac{1}{2^{k}-2 i+1}\right) \\
& =\left(2^{k}-1\right) ! ! \sum_{i=1}^{2^{k-1}} \frac{2^{k}}{(2 i-1)\left(2^{k}-2 i+1\right)}=2^{k} \sum_{i=1}^{2^{k-1}} \frac{\left(2^{k}-1\right) ! !}{(2 i-1)\left(2^{k}-2 i+1\right)}=2^{k} S
\end{aligned}
\]
For any integer \(i=1, \ldots, 2^{k-1}\), denote by \(a_{2 i-1}\) the residue inverse to \(2 i-1\) modulo \(2^{k}\). Clearly, when \(2 i-1\) runs through all odd residues, so does \(a_{2 i-1}\), hence
\[
\begin{gathered}
S=\sum_{i=1}^{2^{k-1}} \frac{\left(2^{k}-1\right) ! !}{(2 i-1)\left(2^{k}-2 i+1\right)} \equiv-\sum_{i=1}^{2^{k-1}} \frac{\left(2^{k}-1\right) ! !}{(2 i-1)^{2}} \equiv-\sum_{i=1}^{2^{k-1}}\left(2^{k}-1\right) ! ! a_{2 i-1}^{2} \\
=-\left(2^{k}-1\right) ! ! \sum_{i=1}^{2^{k-1}}(2 i-1)^{2}=-\left(2^{k}-1\right) ! ! \frac{2^{k-1}\left(2^{2 k}-1\right)}{3} \quad\left(\bmod 2^{k}\right) .
\end{gathered}
\]
Therefore, the exponent of 2 in \(S\) is \(k-1\), so \(c=2^{k} S=2^{2 k-1}(2 t+1)\) for some integer \(t\).
Finally we obtain that
\[
P\left(2^{k}\right)=2^{3 k} Q\left(2^{k}\right)+2^{k} c=2^{3 k} Q\left(2^{k}\right)+2^{3 k-1}(2 t+1),
\]
which is divisible exactly by \(2^{3 k-1}\). Thus, the exponent of 2 in \((2)\) is \(1+(3 k-1)=3 k\).
