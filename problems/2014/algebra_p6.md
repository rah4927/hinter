---
id: fimo_2014_algebra_p6
year: 2014
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2014 Algebra Problem 6"
---

Find all functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) such that
\[
n^{2}+4 f(n)=f(f(n))^{2}
\]
for all \(n \in \mathbb{Z}\).

*  \(f(n)=n+1\) for all \(n\)

*  or, for some \(a \geqslant 1, \quad f(n)= \begin{cases}n+1, & n > -a, \\ -n+1, & n \leqslant-a ;\end{cases}\)

*  or \(f(n)= \begin{cases}n+1, & n > 0 \\ 0, & n=0 \\ -n+1, & n < 0\end{cases}\)


---
Part I. Let us first check that each of the functions above really satisfies the given functional equation. If \(f(n)=n+1\) for all \(n\), then we have
\[
n^{2}+4 f(n)=n^{2}+4 n+4=(n+2)^{2}=f(n+1)^{2}=f(f(n))^{2} .
\]
If \(f(n)=n+1\) for \(n > -a\) and \(f(n)=-n+1\) otherwise, then we have the same identity for \(n > -a\) and
\[
n^{2}+4 f(n)=n^{2}-4 n+4=(2-n)^{2}=f(1-n)^{2}=f(f(n))^{2}
\]
otherwise. The same applies to the third solution (with \(a=0\) ), where in addition one has
\[
0^{2}+4 f(0)=0=f(f(0))^{2} .
\]
Part II. It remains to prove that these are really the only functions that satisfy our functional equation. We do so in three steps:
Step 1: We prove that \(f(n)=n+1\) for \(n > 0\).
Consider the sequence \(\left(a_{k}\right)\) given by \(a_{k}=f^{k}(1)\) for \(k \geqslant 0\). Setting \(n=a_{k}\) in (1), we get
\[
a_{k}^{2}+4 a_{k+1}=a_{k+2}^{2} .
\]
Of course, \(a_{0}=1\) by definition. Since \(a_{2}^{2}=1+4 a_{1}\) is odd, \(a_{2}\) has to be odd as well, so we set \(a_{2}=2 r+1\) for some \(r \in \mathbb{Z}\). Then \(a_{1}=r^{2}+r\) and consequently
\[
a_{3}^{2}=a_{1}^{2}+4 a_{2}=\left(r^{2}+r\right)^{2}+8 r+4 .
\]
Since \(8 r+4 \neq 0, a_{3}^{2} \neq\left(r^{2}+r\right)^{2}\), so the difference between \(a_{3}^{2}\) and \(\left(r^{2}+r\right)^{2}\) is at least the distance from \(\left(r^{2}+r\right)^{2}\) to the nearest even square (since \(8 r+4\) and \(r^{2}+r\) are both even). This implies that
\[
|8 r+4|=\left|a_{3}^{2}-\left(r^{2}+r\right)^{2}\right| \geqslant\left(r^{2}+r\right)^{2}-\left(r^{2}+r-2\right)^{2}=4\left(r^{2}+r-1\right),
\]
(for \(r=0\) and \(r=-1\), the estimate is trivial, but this does not matter). Therefore, we ave
\[
4 r^{2} \leqslant|8 r+4|-4 r+4 .
\]
If \(|r| \geqslant 4\), then
\[
4 r^{2} \geqslant 16|r| \geqslant 12|r|+16 > 8|r|+4+4|r|+4 \geqslant|8 r+4|-4 r+4,
\]
a contradiction. Thus \(|r| < 4\). Checking all possible remaining values of \(r\), we find that \(\left(r^{2}+r\right)^{2}+8 r+4\) is only a square in three cases: \(r=-3, r=0\) and \(r=1\). Let us now distinguish these three cases:

*  \(r=-3\), thus \(a_{1}=6\) and \(a_{2}=-5\). For each \(k \geqslant 1\), we have

\[
a_{k+2}=\pm \sqrt{a_{k}^{2}+4 a_{k+1}},
\]
and the sign needs to be chosen in such a way that \(a_{k+1}^{2}+4 a_{k+2}\) is again a square. This yields \(a_{3}=-4, a_{4}=-3, a_{5}=-2, a_{6}=-1, a_{7}=0, a_{8}=1, a_{9}=2\). At this point we have reached a contradiction, since \(f(1)=f\left(a_{0}\right)=a_{1}=6\) and at the same time \(f(1)=f\left(a_{8}\right)=a_{9}=2\).

*  \(r=0\), thus \(a_{1}=0\) and \(a_{2}=1\). Then \(a_{3}^{2}=a_{1}^{2}+4 a_{2}=4\), so \(a_{3}=\pm 2\). This, however, is a contradiction again, since it gives us \(f(1)=f\left(a_{0}\right)=a_{1}=0\) and at the same time \(f(1)=f\left(a_{2}\right)=a_{3}=\pm 2\)

*  \(r=1\), thus \(a_{1}=2\) and \(a_{2}=3\). We prove by induction that \(a_{k}=k+1\) for all \(k \geqslant 0\) in this case, which we already know for \(k \leqslant 2\) now. For the induction step, assume that \(a_{k-1}=k\) and \(a_{k}=k+1\). Then

\[
a_{k+1}^{2}=a_{k-1}^{2}+4 a_{k}=k^{2}+4 k+4=(k+2)^{2},
\]
so \(a_{k+1}=\pm(k+2)\). If \(a_{k+1}=-(k+2)\), then
\[
a_{k+2}^{2}=a_{k}^{2}+4 a_{k+1}=(k+1)^{2}-4 k-8=k^{2}-2 k-7=(k-1)^{2}-8 .
\]
The latter can only be a square if \(k=4\) (since 1 and 9 are the only two squares whose difference is 8). Then, however, \(a_{4}=5, a_{5}=-6\) and \(a_{6}=\pm 1\), so
\[
a_{7}^{2}=a_{5}^{2}+4 a_{6}=36 \pm 4,
\]
but neither 32 nor 40 is a perfect square. Thus \(a_{k+1}=k+2\), which completes our induction. This also means that \(f(n)=f\left(a_{n-1}\right)=a_{n}=n+1\) for all \(n \geqslant 1\).
Step 2: We prove that either \(f(0)=1\), or \(f(0)=0\) and \(f(n) \neq 0\) for \(n \neq 0\).
Set \(n=0\) in (1) to get
\[
4 f(0)=f(f(0))^{2} .
\]
This means that \(f(0) \geqslant 0\). If \(f(0)=0\), then \(f(n) \neq 0\) for all \(n \neq 0\), since we would otherwise have
\[
n^{2}=n^{2}+4 f(n)=f(f(n))^{2}=f(0)^{2}=0 .
\]
If \(f(0) > 0\), then we know that \(f(f(0))=f(0)+1\) from the first step, so
\[
4 f(0)=(f(0)+1)^{2},
\]
which yields \(f(0)=1\). Step 3: We discuss the values of \(f(n)\) for \(n < 0\).
Lemma. For every \(n \geqslant 1\), we have \(f(-n)=-n+1\) or \(f(-n)=n+1\). Moreover, if \(f(-n)=\) \(-n+1\) for some \(n \geqslant 1\), then also \(f(-n+1)=-n+2\).
Proof. We prove this statement by strong induction on \(n\). For \(n=1\), we get
\[
1+4 f(-1)=f(f(-1))^{2} .
\]
Thus \(f(-1)\) needs to be nonnegative. If \(f(-1)=0\), then \(f(f(-1))=f(0)=\pm 1\), so \(f(0)=1\) (by our second step). Otherwise, we know that \(f(f(-1))=f(-1)+1\), so
\[
1+4 f(-1)=(f(-1)+1)^{2} \text {, }
\]
which yields \(f(-1)=2\) and thus establishes the base case. For the induction step, we consider two cases:

*  If \(f(-n) \leqslant-n\), then

\[
f(f(-n))^{2}=(-n)^{2}+4 f(-n) \leqslant n^{2}-4 n < (n-2)^{2},
\]
so \(|f(f(-n))| \leqslant n-3\) (for \(n=2\), this case cannot even occur). If \(f(f(-n)) \geqslant 0\), then we already know from the first two steps that \(f(f(f(-n)))=f(f(-n))+1\), unless perhaps if \(f(0)=0\) and \(f(f(-n))=0\). However, the latter would imply \(f(-n)=0\) (as shown in Step 2) and thus \(n=0\), which is impossible. If \(f(f(-n)) < 0\), we can apply the induction hypothesis to \(f(f(-n))\). In either case, \(f(f(f(-n)))=\pm f(f(-n))+1\). Therefore,
\[
f(-n)^{2}+4 f(f(-n))=f(f(f(-n)))^{2}=(\pm f(f(-n))+1)^{2}
\]
which gives us
\[
\begin{aligned}
n^{2} & \leqslant f(-n)^{2}=(\pm f(f(-n))+1)^{2}-4 f(f(-n)) \leqslant f(f(-n))^{2}+6|f(f(-n))|+1 \\
& \leqslant(n-3)^{2}+6(n-3)+1=n^{2}-8
\end{aligned}
\]
a contradiction.

*  Thus, we are left with the case that \(f(-n) > -n\). Now we argue as in the previous case: if \(f(-n) \geqslant 0\), then \(f(f(-n))=f(-n)+1\) by the first two steps, since \(f(0)=0\) and \(f(-n)=0\) would imply \(n=0\) (as seen in Step 2) and is thus impossible. If \(f(-n) < 0\), we can apply the induction hypothesis, so in any case we can infer that \(f(f(-n))=\pm f(-n)+1\). We obtain

\[
(-n)^{2}+4 f(-n)=(\pm f(-n)+1)^{2}
\]
so either
\[
n^{2}=f(-n)^{2}-2 f(-n)+1=(f(-n)-1)^{2},
\]
which gives us \(f(-n)=\pm n+1\), or
\[
n^{2}=f(-n)^{2}-6 f(-n)+1=(f(-n)-3)^{2}-8 .
\]
Since 1 and 9 are the only perfect squares whose difference is 8 , we must have \(n=1\), which we have already considered.
Finally, suppose that \(f(-n)=-n+1\) for some \(n \geqslant 2\). Then
\[
f(-n+1)^{2}=f(f(-n))^{2}=(-n)^{2}+4 f(-n)=(n-2)^{2},
\]
so \(f(-n+1)=\pm(n-2)\). However, we already know that \(f(-n+1)=-n+2\) or \(f(-n+1)=n\), so \(f(-n+1)=-n+2\). Combining everything we know, we find the solutions as stated in the answer:

*  One solution is given by \(f(n)=n+1\) for all \(n\).

*  If \(f(n)\) is not always equal to \(n+1\), then there is a largest integer \(m\) (which cannot be positive) for which this is not the case. In view of the lemma that we proved, we must then have \(f(n)=-n+1\) for any integer \(n < m\). If \(m=-a < 0\), we obtain \(f(n)=-n+1\) for \(n \leqslant-a\) (and \(f(n)=n+1\) otherwise). If \(m=0\), we have the additional possibility that \(f(0)=0, f(n)=-n+1\) for negative \(n\) and \(f(n)=n+1\) for positive \(n\).

