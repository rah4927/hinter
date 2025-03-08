---
id: fimo_2016_number_theory_p1
year: 2016
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 1"
---

For any positive integer \(k\), denote the sum of digits of \(k\) in its decimal representation by \(S(k)\). Find all polynomials \(P(x)\) with integer coefficients such that for any positive integer \(n \geqslant 2016\), the integer \(P(n)\) is positive and

\[
S(P(n))=P(S(n))
\]

The final answer is

\begin{itemize}
 \item \(P(x)=c\) where \(1 \leqslant c \leqslant 9\) is an integer; or

 \item \(P(x)=x\).

\end{itemize}

---
We consider three cases according to the degree of \(P\).

\begin{itemize}
 \item Case 1. \(P(x)\) is a constant polynomial.
\end{itemize}

Let \(P(x)=c\) where \(c\) is an integer constant. Then (1) becomes \(S(c)=c\). This holds if and only if \(1 \leqslant c \leqslant 9\).

\begin{itemize}
 \item Case 2. \(\operatorname{deg} P=1\).
\end{itemize}

We have the following observation. For any positive integers \(m, n\), we have

\[
S(m+n) \leqslant S(m)+S(n)
\]

and equality holds if and only if there is no carry in the addition \(m+n\).

Let \(P(x)=a x+b\) for some integers \(a, b\) where \(a \neq 0\). As \(P(n)\) is positive for large \(n\), we must have \(a \geqslant 1\). The condition (1) becomes \(S(a n+b)=a S(n)+b\) for all \(n \geqslant 2016\). Setting \(n=2025\) and \(n=2020\) respectively, we get

\[
S(2025 a+b)-S(2020 a+b)=(a S(2025)+b)-(a S(2020)+b)=5 a .
\]

On the other hand, (2) implies

\[
S(2025 a+b)=S((2020 a+b)+5 a) \leqslant S(2020 a+b)+S(5 a)
\]

These give \(5 a \leqslant S(5 a)\). As \(a \geqslant 1\), this holds only when \(a=1\), in which case (1) reduces to \(S(n+b)=S(n)+b\) for all \(n \geqslant 2016\). Then we find that

\[
S(n+1+b)-S(n+b)=(S(n+1)+b)-(S(n)+b)=S(n+1)-S(n) .
\]

If \(b > 0\), we choose \(n\) such that \(n+1+b=10^{k}\) for some sufficiently large \(k\). Note that all the digits of \(n+b\) are 9's, so that the left-hand side of (3) equals \(1-9 k\). As \(n\) is a positive integer less than \(10^{k}-1\), we have \(S(n) < 9 k\). Therefore, the right-hand side of (3) is at least \(1-(9 k-1)=2-9 k\), which is a contradiction.

The case \(b < 0\) can be handled similarly by considering \(n+1\) to be a large power of 10 . Therefore, we conclude that \(P(x)=x\), in which case (1) is trivially satisfied. - Case 3. \(\operatorname{deg} P \geqslant 2\)

Suppose the leading term of \(P\) is \(a_{d} n^{d}\) where \(a_{d} \neq 0\). Clearly, we have \(a_{d} > 0\). Consider \(n=10^{k}-1\) in (1). We get \(S(P(n))=P(9 k)\). Note that \(P(n)\) grows asymptotically as fast as \(n^{d}\), so \(S(P(n))\) grows asymptotically as no faster than a constant multiple of \(k\). On the other hand, \(P(9 k)\) grows asymptotically as fast as \(k^{d}\). This shows the two sides of the last equation cannot be equal for sufficiently large \(k\) since \(d \geqslant 2\).

Therefore, we conclude that \(P(x)=c\) where \(1 \leqslant c \leqslant 9\) is an integer, or \(P(x)=x\).
