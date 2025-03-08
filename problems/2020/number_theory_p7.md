---
id: fimo_2020_number_theory_p7
year: 2020
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 7"
---

Let \(\mathcal{S}\) be a set consisting of \(n \geqslant 3\) positive integers, none of which is a sum of two other distinct members of \(\mathcal{S}\). Prove that the elements of \(\mathcal{S}\) may be ordered as \(a_{1}, a_{2}, \ldots, a_{n}\) so that \(a_{i}\) does not divide \(a_{i-1}+a_{i+1}\) for all \(i=2,3, \ldots, n-1\).

---
We call a set \(\mathcal{S}\) of positive integers good if no its element is a sum of two other distinct members of \(\mathcal{S}\). We will use the following simple observation.
Observation A. If \(a, b\), and \(c\) are three distinct elements of a good set \(\mathcal{S}\) with \(b > a, c\), then \(b \nmid a+c\). Otherwise, since \(b \neq a+c\), we would have \(b \leqslant(a+c) / 2 < \max \{a, c\}\).
We prove the following stronger statement.
Claim. Let \(\mathcal{S}\) be a good set consisting of \(n \geqslant 2\) positive integers. Then the elements of \(\mathcal{S}\) may be ordered as \(a_{1}, a_{2}, \ldots, a_{n}\) so that \(a_{i} \nmid a_{i-1}+a_{i+1}\) and \(a_{i} \nmid a_{i-1}-a_{i+1}\), for all \(i=2,3, \ldots, n-1\).
Proof. Say that the ordering \(a_{1}, \ldots, a_{n}\) of \(\mathcal{S}\) is nice if it satisfies the required property.
We proceed by induction on \(n\). The base case \(n=2\) is trivial, as there are no restrictions on the ordering.
To perform the step of induction, suppose that \(n \geqslant 3\). Let \(a=\max \mathcal{S}\), and set \(\mathcal{T}=\mathcal{S} \backslash\{a\}\). Use the inductive hypothesis to find a nice ordering \(b_{1}, \ldots, b_{n-1}\) of \(\mathcal{T}\). We will show that a may be inserted into this sequence so as to reach a nice ordering of \(\mathcal{S}\). In other words, we will show that there exists a \(j \in\{1,2, \ldots, n\}\) such that the ordering
\[
N_{j}=\left(b_{1}, \ldots, b_{j-1}, a, b_{j}, b_{j+1}, \ldots, b_{n-1}\right)
\]
is nice.
Assume that, for some \(j\), the ordering \(N_{j}\) is not nice, so that some element \(x\) in it divides either the sum or the difference of two adjacent ones. This did not happen in the ordering of \(\mathcal{T}\), hence \(x \in\left\{b_{j-1}, a, b_{j}\right\}\) (if, say, \(b_{j-1}\) does not exist, then \(x \in\left\{a, b_{j}\right\}\); a similar agreement is applied hereafter). But the case \(x=a\) is impossible: \(a\) cannot divide \(b_{j-1}-b_{j}\), since \(0 < \left|b_{j-1}-b_{j}\right| < a\), while \(a \nmid b_{j-1}+b_{j}\) by Observation A. Therefore \(x \in\left\{b_{j-1}, b_{j}\right\}\). In this case, assign the number \(x\) to the index \(j\).
Suppose now that none of the \(N_{j}\) is nice. Since there are \(n\) possible indices \(j\), and only \(n-1\) elements in \(\mathcal{T}\), one of those elements \(\left(\right.\) say, \(\left.b_{k}\right)\) is assigned to two different indices, which then should equal \(k\) and \(k+1\). This means that \(b_{k}\) divides the numbers \(b_{k-1}+\varepsilon_{1} a\) and \(a+\varepsilon_{2} b_{k+1}\), for some signs \(\varepsilon_{1}, \varepsilon_{2} \in\{-1,1\}\). But then
\[
b_{k-1} \equiv-\varepsilon_{1} a \equiv \varepsilon_{1} \varepsilon_{2} b_{k+1} \quad\left(\bmod b_{k}\right)
\]
and therefore \(b_{k} \mid b_{k-1}-\varepsilon_{1} \varepsilon_{2} b_{k+1}\), which means that the ordering of \(\mathcal{T}\) was not nice. This contradiction proves the step of induction.
