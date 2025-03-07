---
id: fimo_2010_number_theory_p6
year: 2010
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2010 Number Theory Problem 6"
---

The rows and columns of a \(2^{n} \times 2^{n}\) table are numbered from 0 to \(2^{n}-1\). The cells of the table have been colored with the following property being satisfied: for each \(0 \leq i, j \leq 2^{n}-1\), the \(j\) th cell in the \(i\) th row and the \((i+j)\) th cell in the \(j\) th row have the same color. (The indices of the cells in a row are considered modulo \(2^{n}\).)
Prove that the maximal possible number of colors is \(2^{n}\).

---
Throughout the solution we denote the cells of the table by coordinate pairs; \((i, j)\) refers to the \(j\) th cell in the \(i\) th row.
Consider the directed graph, whose vertices are the cells of the board, and the edges are the arrows \((i, j) \rightarrow(j, i+j)\) for all \(0 \leq i, j \leq 2^{n}-1\). From each vertex \((i, j)\), exactly one edge passes (to \(\left(j, i+j \bmod 2^{n}\right)\) ); conversely, to each cell \((j, k)\) exactly one edge is directed (from the cell \(\left.\left(k-j \bmod 2^{n}, j\right)\right)\). Hence, the graph splits into cycles.
Now, in any coloring considered, the vertices of each cycle should have the same color by the problem condition. On the other hand, if each cycle has its own color, the obtained coloring obviously satisfies the problem conditions. Thus, the maximal possible number of colors is the same as the number of cycles, and we have to prove that this number is \(2^{n}\).
Next, consider any cycle \(\left(i_{1}, j_{1}\right),\left(i_{2}, j_{2}\right), \ldots ;\) we will describe it in other terms. Define a sequence \(\left(a_{0}, a_{1}, \ldots\right)\) by the relations \(a_{0}=i_{1}, a_{1}=j_{1}, a_{n+1}=a_{n}+a_{n-1}\) for all \(n \geq 1\) (we say that such a sequence is a Fibonacci-type sequence). Then an obvious induction shows that \(i_{k} \equiv a_{k-1}\left(\bmod 2^{n}\right), j_{k} \equiv a_{k}\left(\bmod 2^{n}\right)\). Hence we need to investigate the behavior of Fibonacci-type sequences modulo \(2^{n}\).
Denote by \(F_{0}, F_{1}, \ldots\) the Fibonacci numbers defined by \(F_{0}=0, F_{1}=1\), and \(F_{n+2}=\) \(F_{n+1}+F_{n}\) for \(n \geq 0\). We also set \(F_{-1}=1\) according to the recurrence relation.
For every positive integer \(m\), denote by \(\nu(m)\) the exponent of 2 in the prime factorization of \(m\), i.e. for which \(2^{\nu(m)} \mid m\) but \(2^{\nu(m)+1} \not m\).
Lemma 1. For every Fibonacci-type sequence \(a_{0}, a_{1}, a_{2}, \ldots\), and every \(k \geq 0\), we have \(a_{k}=\) \(F_{k-1} a_{0}+F_{k} a_{1}\).
Proof. Apply induction on \(k\). The base cases \(k=0,1\) are trivial. For the step, from the induction hypothesis we get
\[
a_{k+1}=a_{k}+a_{k-1}=\left(F_{k-1} a_{0}+F_{k} a_{1}\right)+\left(F_{k-2} a_{0}+F_{k-1} a_{1}\right)=F_{k} a_{0}+F_{k+1} a_{1} .
\]
Lemma 2. For every \(m \geq 3\),
(a) we have \(\nu\left(F_{3 \cdot 2^{m-2}}\right)=m\)
(b) \(d=3 \cdot 2^{m-2}\) is the least positive index for which \(2^{m} \mid F_{d}\);
(c) \(F_{3 \cdot 2^{m-2}+1} \equiv 1+2^{m-1}\left(\bmod 2^{m}\right)\).
Proof. Apply induction on \(m\). In the base case \(m=3\) we have \(\nu\left(F_{3 \cdot 2^{m-2}}\right)=F_{6}=8\), so \(\nu\left(F_{3 \cdot 2^{m-2}}\right)=\nu(8)=3\), the preceding Fibonacci-numbers are not divisible by 8 , and indeed \(F_{3 \cdot 2^{m-2}+1}=F_{7}=13 \equiv 1+4(\bmod 8)\).
Now suppose that \(m > 3\) and let \(k=3 \cdot 2^{m-3}\). By applying Lemma 1 to the Fibonacci-type sequence \(F_{k}, F_{k+1}, \ldots\) we get
\[
\begin{gathered}
F_{2 k}=F_{k-1} F_{k}+F_{k} F_{k+1}=\left(F_{k+1}-F_{k}\right) F_{k}+F_{k+1} F_{k}=2 F_{k+1} F_{k}-F_{k}^{2}, \\
F_{2 k+1}=F_{k} \cdot F_{k}+F_{k+1} \cdot F_{k+1}=F_{k}^{2}+F_{k+1}^{2} .
\end{gathered}
\]
By the induction hypothesis, \(\nu\left(F_{k}\right)=m-1\), and \(F_{k+1}\) is odd. Therefore we get \(\nu\left(F_{k}^{2}\right)=\) \(2(m-1) > (m-1)+1=\nu\left(2 F_{k} F_{k+1}\right)\), which implies \(\nu\left(F_{2 k}\right)=m\), establishing statement (a). Moreover, since \(F_{k+1}=1+2^{m-2}+a 2^{m-1}\) for some integer \(a\), we get
\[
F_{2 k+1}=F_{k}^{2}+F_{k+1}^{2} \equiv 0+\left(1+2^{m-2}+a 2^{m-1}\right)^{2} \equiv 1+2^{m-1} \quad\left(\bmod 2^{m}\right)
\]
as desired in statement (c).
We are left to prove that \(2^{m} \backslash F_{\ell}\) for \(\ell < 2 k\). Assume the contrary. Since \(2^{m-1} \mid F_{\ell}\), from the induction hypothesis it follows that \(\ell > k\). But then we have \(F_{\ell}=F_{k-1} F_{\ell-k}+F_{k} F_{\ell-k+1}\), where the second summand is divisible by \(2^{m-1}\) but the first one is not (since \(F_{k-1}\) is odd and \(\ell-k < k)\). Hence the sum is not divisible even by \(2^{m-1}\). A contradiction.
Now, for every pair of integers \((a, b) \neq(0,0)\), let \(\mu(a, b)=\min \{\nu(a), \nu(b)\}\). By an obvious induction, for every Fibonacci-type sequence \(A=\left(a_{0}, a_{1}, \ldots\right)\) we have \(\mu\left(a_{0}, a_{1}\right)=\mu\left(a_{1}, a_{2}\right)=\ldots\); denote this common value by \(\mu(A)\). Also denote by \(p_{n}(A)\) the period of this sequence modulo \(2^{n}\), that is, the least \(p > 0\) such that \(a_{k+p} \equiv a_{k}\left(\bmod 2^{n}\right)\) for all \(k \geq 0\).
Lemma 3. Let \(A=\left(a_{0}, a_{1}, \ldots\right)\) be a Fibonacci-type sequence such that \(\mu(A)=k < n\). Then \(p_{n}(A)=3 \cdot 2^{n-1-k}\)
Proof. First, we note that the sequence \(\left(a_{0}, a_{1}, \ldots\right)\) has period \(p\) modulo \(2^{n}\) if and only if the sequence \(\left(a_{0} / 2^{k}, a_{1} / 2^{k}, \ldots\right)\) has period \(p\) modulo \(2^{n-k}\). Hence, passing to this sequence we can assume that \(k=0\).
We prove the statement by induction on \(n\). It is easy to see that for \(n=1,2\) the claim is true; actually, each Fibonacci-type sequence \(A\) with \(\mu(A)=0\) behaves as \(0,1,1,0,1,1, \ldots\) modulo 2 , and as \(0,1,1,2,3,1,0,1,1,2,3,1, \ldots\) modulo 4 (all pairs of residues from which at least one is odd appear as a pair of consecutive terms in this sequence).
Now suppose that \(n \geq 3\) and consider an arbitrary Fibonacci-type sequence \(A=\left(a_{0}, a_{1}, \ldots\right)\) with \(\mu(A)=0\). Obviously we should have \(p_{n-1}(A) \mid p_{n}(A)\), or, using the induction hypothesis, \(s=3 \cdot 2^{n-2} \mid p_{n}(A)\). Next, we may suppose that \(a_{0}\) is even; hence \(a_{1}\) is odd, and \(a_{0}=2 b_{0}\), \(a_{1}=2 b_{1}+1\) for some integers \(b_{0}, b_{1}\).
Consider the Fibonacci-type sequence \(B=\left(b_{0}, b_{1}, \ldots\right)\) starting with \(\left(b_{0}, b_{1}\right)\). Since \(a_{0}=\) \(2 b_{0}+F_{0}, a_{1}=2 b_{1}+F_{1}\), by an easy induction we get \(a_{k}=2 b_{k}+F_{k}\) for all \(k \geq 0\). By the induction hypothesis, we have \(p_{n-1}(B) \mid s\), hence the sequence \(\left(2 b_{0}, 2 b_{1}, \ldots\right)\) is \(s\)-periodic modulo \(2^{n}\). On the other hand, by Lemma 2 we have \(F_{s+1} \equiv 1+2^{n-1}\left(\bmod 2^{n}\right), F_{2 s} \equiv 0\) \(\left(\bmod 2^{n}\right), F_{2 s+1} \equiv 1\left(\bmod 2^{n}\right)\), hence
\[
\begin{gathered}
a_{s+1}=2 b_{s+1}+F_{s+1} \equiv 2 b_{1}+1+2^{n-1} \not 2 b_{1}+1=a_{1} \quad\left(\bmod 2^{n}\right), \\
a_{2 s}=2 b_{2 s}+F_{2 s} \equiv 2 b_{0}+0=a_{0} \quad\left(\bmod 2^{n}\right), \\
a_{2 s+1}=2 b_{2 s+1}+F_{2 s+1} \equiv 2 b_{1}+1=a_{1} \quad\left(\bmod 2^{n}\right) .
\end{gathered}
\]
The first line means that \(A\) is not \(s\)-periodic, while the other two provide that \(a_{2 s} \equiv a_{0}\), \(a_{2 s+1} \equiv a_{1}\) and hence \(a_{2 s+t} \equiv a_{t}\) for all \(t \geq 0\). Hence \(s\left|p_{n}(A)\right| 2 s\) and \(p_{n}(A) \neq s\), which means that \(p_{n}(A)=2 s\), as desired.
Finally, Lemma 3 provides a straightforward method of counting the number of cycles. Actually, take any number \(0 \leq k \leq n-1\) and consider all the cells \((i, j)\) with \(\mu(i, j)=k\). The total number of such cells is \(2^{2(n-k)}-2^{2(n-k-1)}=3 \cdot 2^{2 n-2 k-2}\). On the other hand, they are split into cycles, and by Lemma 3 the length of each cycle is \(3 \cdot 2^{n-1-k}\). Hence the number of cycles consisting of these cells is exactly \(\frac{3 \cdot 2^{2 n-2 k-2}}{3 \cdot 2^{n-1-k}}=2^{n-k-1}\). Finally, there is only one cell \((0,0)\) which is not mentioned in the previous computation, and it forms a separate cycle. So the total number of cycles is
\[
1+\sum_{k=0}^{n-1} 2^{n-1-k}=1+\left(1+2+4+\cdots+2^{n-1}\right)=2^{n}
\]
