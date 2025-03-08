---
id: fimo_2009_algebra_p1
year: 2009
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 1"
---

Find the largest possible integer \(k\), such that the following statement is true:

Let 2009 arbitrary non-degenerated triangles be given. In every triangle the three sides are colored, such that one is blue, one is red and one is white. Now, for every color separately, let us sort the lengths of the sides. We obtain

\[
\begin{aligned}
& b_{1} \leq b_{2} \leq \ldots \leq b_{2009} \quad \text { the lengths of the blue sides, } \\
& r_{1} \leq r_{2} \leq \ldots \leq r_{2009} \quad \text { the lengths of the red sides, } \\
& \text { and } \quad w_{1} \leq w_{2} \leq \ldots \leq w_{2009} \quad \text { the lengths of the white sides. }
\end{aligned}
\]

Then there exist \(k\) indices \(j\) such that we can form a non-degenerated triangle with side lengths \(b_{j}, r_{j}, w_{j}\)

The final answer is that the largest possible number \(k\) of indices satisfying the given condition is one.

---
We will prove that the largest possible number \(k\) of indices satisfying the given condition is one.

Firstly we prove that \(b_{2009}, r_{2009}, w_{2009}\) are always lengths of the sides of a triangle. Without loss of generality we may assume that \(w_{2009} \geq r_{2009} \geq b_{2009}\). We show that the inequality \(b_{2009}+r_{2009} > w_{2009}\) holds. Evidently, there exists a triangle with side lengths \(w, b, r\) for the white, blue and red side, respectively, such that \(w_{2009}=w\). By the conditions of the problem we have \(b+r > w, b_{2009} \geq b\) and \(r_{2009} \geq r\). From these inequalities it follows

\[
b_{2009}+r_{2009} \geq b+r > w=w_{2009} \text {. }
\]

Secondly we will describe a sequence of triangles for which \(w_{j}, b_{j}, r_{j}\) with \(j < 2009\) are not the lengths of the sides of a triangle. Let us define the sequence \(\Delta_{j}, j=1,2, \ldots, 2009\), of triangles, where \(\Delta_{j}\) has

a blue side of length \(2 j\),

a red side of length \(j\) for all \(j \leq 2008\) and 4018 for \(j=2009\),

and a white side of length \(j+1\) for all \(j \leq 2007,4018\) for \(j=2008\) and 1 for \(j=2009\). Since

\[
\begin{aligned}
& (j+1)+j > 2 j \geq j+1 > j, \quad \text { if } \quad j \leq 2007 \text {, } \\
& 2 j+j > 4018 > 2 j > j, \quad \text { if } j=2008 \text {, } \\
& 4018+1 > 2 j=4018 > 1, \quad \text { if } \quad j=2009 \text {, }
\end{aligned}
\]

such a sequence of triangles exists. Moreover, \(w_{j}=j, r_{j}=j\) and \(b_{j}=2 j\) for \(1 \leq j \leq 2008\). Then

\[
w_{j}+r_{j}=j+j=2 j=b_{j},
\]

i.e., \(b_{j}, r_{j}\) and \(w_{j}\) are not the lengths of the sides of a triangle for \(1 \leq j \leq 2008\).
