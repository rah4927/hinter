---
id: fimo_2016_number_theory_p7
year: 2016
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 7"
---

Let \(n\) be an odd positive integer. In the Cartesian plane, a cyclic polygon \(P\) with area \(S\) is chosen. All its vertices have integral coordinates, and the squares of its side lengths are all divisible by \(n\). Prove that \(2 S\) is an integer divisible by \(n\).

---
Let \(P=A_{1} A_{2} \ldots A_{k}\) and let \(A_{k+i}=A_{i}\) for \(i \geqslant 1\). By the Shoelace Formula, the area of any convex polygon with integral coordinates is half an integer. Therefore, \(2 S\) is an integer. We shall prove by induction on \(k \geqslant 3\) that \(2 S\) is divisible by \(n\). Clearly, it suffices to consider \(n=p^{t}\) where \(p\) is an odd prime and \(t \geqslant 1\).
For the base case \(k=3\), let the side lengths of \(P\) be \(\sqrt{n a}, \sqrt{n b}, \sqrt{n c}\) where \(a, b, c\) are positive integers. By Heron's Formula,
\[
16 S^{2}=n^{2}\left(2 a b+2 b c+2 c a-a^{2}-b^{2}-c^{2}\right) .
\]
This shows \(16 S^{2}\) is divisible by \(n^{2}\). Since \(n\) is odd, \(2 S\) is divisible by \(n\).
Assume \(k \geqslant 4\). If the square of length of one of the diagonals is divisible by \(n\), then that diagonal divides \(P\) into two smaller polygons, to which the induction hypothesis applies. Hence we may assume that none of the squares of diagonal lengths is divisible by \(n\). As usual, we denote by \(\nu_{p}(r)\) the exponent of \(p\) in the prime decomposition of \(r\). We claim the following.

*  Claim. \(\nu_{p}\left(A_{1} A_{m}^{2}\right) > \nu_{p}\left(A_{1} A_{m+1}^{2}\right)\) for \(2 \leqslant m \leqslant k-1\).

Proof. The case \(m=2\) is obvious since \(\nu_{p}\left(A_{1} A_{2}^{2}\right) \geqslant p^{t} > \nu_{p}\left(A_{1} A_{3}^{2}\right)\) by the condition and the above assumption.
Suppose \(\nu_{p}\left(A_{1} A_{2}^{2}\right) > \nu_{p}\left(A_{1} A_{3}^{2}\right) > \cdots > \nu_{p}\left(A_{1} A_{m}^{2}\right)\) where \(3 \leqslant m \leqslant k-1\). For the induction step, we apply Ptolemy's Theorem to the cyclic quadrilateral \(A_{1} A_{m-1} A_{m} A_{m+1}\) to get
\[
A_{1} A_{m+1} \times A_{m-1} A_{m}+A_{1} A_{m-1} \times A_{m} A_{m+1}=A_{1} A_{m} \times A_{m-1} A_{m+1},
\]
which can be rewritten as
\[
\begin{aligned}
A_{1} A_{m+1}^{2} \times A_{m-1} A_{m}^{2}= & A_{1} A_{m-1}^{2} \times A_{m} A_{m+1}^{2}+A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2} \\
& -2 A_{1} A_{m-1} \times A_{m} A_{m+1} \times A_{1} A_{m} \times A_{m-1} A_{m+1} .
\end{aligned}
\]
From this, \(2 A_{1} A_{m-1} \times A_{m} A_{m+1} \times A_{1} A_{m} \times A_{m-1} A_{m+1}\) is an integer. We consider the component of \(p\) of each term in (1). By the inductive hypothesis, we have \(\nu_{p}\left(A_{1} A_{m-1}^{2}\right) > \nu_{p}\left(A_{1} A_{m}^{2}\right)\). Also, we have \(\nu_{p}\left(A_{m} A_{m+1}^{2}\right) \geqslant p^{t} > \nu_{p}\left(A_{m-1} A_{m+1}^{2}\right)\). These give
\[
\nu_{p}\left(A_{1} A_{m-1}^{2} \times A_{m} A_{m+1}^{2}\right) > \nu_{p}\left(A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right) \text {. }
\]
Next, we have \(\nu_{p}\left(4 A_{1} A_{m-1}^{2} \times A_{m} A_{m+1}^{2} \times A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right)=\nu_{p}\left(A_{1} A_{m-1}^{2} \times A_{m} A_{m+1}^{2}\right)+\) \(\nu_{p}\left(A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right) > 2 \nu_{p}\left(A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right)\) from (2). This implies
\[
\nu_{p}\left(2 A_{1} A_{m-1} \times A_{m} A_{m+1} \times A_{1} A_{m} \times A_{m-1} A_{m+1}\right) > \nu_{p}\left(A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right) .
\]
Combining (1), (2) and (3), we conclude that
\[
\nu_{p}\left(A_{1} A_{m+1}^{2} \times A_{m-1} A_{m}^{2}\right)=\nu_{p}\left(A_{1} A_{m}^{2} \times A_{m-1} A_{m+1}^{2}\right) \text {. }
\]
By \(\nu_{p}\left(A_{m-1} A_{m}^{2}\right) \geqslant p^{t} > \nu_{p}\left(A_{m-1} A_{m+1}^{2}\right)\), we get \(\nu_{p}\left(A_{1} A_{m+1}^{2}\right) < \nu_{p}\left(A_{1} A_{m}^{2}\right)\). The Claim follows by induction. From the Claim, we get a chain of inequalities
\[
p^{t} > \nu_{p}\left(A_{1} A_{3}^{2}\right) > \nu_{p}\left(A_{1} A_{4}^{2}\right) > \cdots > \nu_{p}\left(A_{1} A_{k}^{2}\right) \geqslant p^{t}
\]
which yields a contradiction. Therefore, we can show by induction that \(2 S\) is divisible by \(n\).
