---
id: fimo_2019_number_theory_p6
year: 2019
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 6"
---

Let \(H=\left\{\lfloor i \sqrt{2}\rfloor: i \in \mathbb{Z}_{ > 0}\right\}=\{1,2,4,5,7, \ldots\}\), and let \(n\) be a positive integer. Prove that there exists a constant \(C\) such that, if \(A \subset\{1,2, \ldots, n\}\) satisfies \(|A| \geqslant C \sqrt{n}\), then there exist \(a, b \in A\) such that \(a-b \in H\). (Here \(\mathbb{Z}_{ > 0}\) is the set of positive integers, and \(\lfloor z\rfloor\) denotes the greatest integer less than or equal to \(z\).)

---
In all solutions, we will assume that \(A\) is a set such that \(\{a-b: a, b \in A\}\) is disjoint from \(H\), and prove that \(|A| < C \sqrt{n}\).

First, observe that if \(n\) is a positive integer, then \(n \in H\) exactly when

\[
\left\{\frac{n}{\sqrt{2}}\right\} > 1-\frac{1}{\sqrt{2}}
\]

To see why, observe that \(n \in H\) if and only if \(0 < i \sqrt{2}-n < 1\) for some \(i \in \mathbb{Z}_{ > 0}\). In other words, \(0 < i-n / \sqrt{2} < 1 / \sqrt{2}\), which is equivalent to (1).

Now, write \(A=\left\{a_{1} < a_{2} < \cdots < a_{k}\right\}\), where \(k=|A|\). Observe that the set of differences is not altered by shifting \(A\), so we may assume that \(A \subseteq\{0,1, \ldots, n-1\}\) with \(a_{1}=0\).

From (1), we learn that \(\left\{a_{i} / \sqrt{2}\right\} < 1-1 / \sqrt{2}\) for each \(i > 1\) since \(a_{i}-a_{1} \notin H\). Furthermore, we must have \(\left\{a_{i} / \sqrt{2}\right\} < \left\{a_{j} / \sqrt{2}\right\}\) whenever \(i < j\); otherwise, we would have

\[
-\left(1-\frac{1}{\sqrt{2}}\right) < \left\{\frac{a_{j}}{\sqrt{2}}\right\}-\left\{\frac{a_{i}}{\sqrt{2}}\right\} < 0
\]

Since \(\left\{\left(a_{j}-a_{i}\right) / \sqrt{2}\right\}=\left\{a_{j} / \sqrt{2}\right\}-\left\{a_{i} / \sqrt{2}\right\}+1\), this implies that \(\left\{\left(a_{j}-a_{i}\right) / \sqrt{2}\right\} > 1 / \sqrt{2} > \) \(1-1 / \sqrt{2}\), contradicting \((1)\)

Now, we have a sequence \(0=a_{1} < a_{2} < \cdots < a_{k} < n\), with

\[
0=\left\{\frac{a_{1}}{\sqrt{2}}\right\} < \left\{\frac{a_{2}}{\sqrt{2}}\right\} < \cdots < \left\{\frac{a_{k}}{\sqrt{2}}\right\} < 1-\frac{1}{\sqrt{2}}
\]

We use the following fact: for any \(d \in \mathbb{Z}\), we have

\[
\left\{\frac{d}{\sqrt{2}}\right\} > \frac{1}{2 d \sqrt{2}}
\]

To see why this is the case, let \(h=\lfloor d / \sqrt{2}\rfloor\), so \(\{d / \sqrt{2}\}=d / \sqrt{2}-h\). Then

\[
\left\{\frac{d}{\sqrt{2}}\right\}\left(\frac{d}{\sqrt{2}}+h\right)=\frac{d^{2}-2 h^{2}}{2} \geqslant \frac{1}{2}
\]

since the numerator is a positive integer. Because \(d / \sqrt{2}+h < 2 d / \sqrt{2}\), inequality (2) follows.

Let \(d_{i}=a_{i+1}-a_{i}\), for \(1 \leqslant i < k\). Then \(\left\{a_{i+1} / \sqrt{2}\right\}-\left\{a_{i} / \sqrt{2}\right\}=\left\{d_{i} / \sqrt{2}\right\}\), and we have

\[
1-\frac{1}{\sqrt{2}} > \sum_{i}\left\{\frac{d_{i}}{\sqrt{2}}\right\} > \frac{1}{2 \sqrt{2}} \sum_{i} \frac{1}{d_{i}} \geqslant \frac{(k-1)^{2}}{2 \sqrt{2}} \frac{1}{\sum_{i} d_{i}} > \frac{(k-1)^{2}}{2 \sqrt{2}} \cdot \frac{1}{n} .
\]

Here, the first inequality holds because \(\left\{a_{k} / \sqrt{2}\right\} < 1-1 / \sqrt{2}\), the second follows from (2), the third follows from an easy application of the AM-HM inequality (or Cauchy-Schwarz), and the fourth follows from the fact that \(\sum_{i} d_{i}=a_{k} < n\).

Rearranging this, we obtain

\[
\sqrt{2 \sqrt{2}-2} \cdot \sqrt{n} > k-1
\]

which provides the required bound on \(k\).
