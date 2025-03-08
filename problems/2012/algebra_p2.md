---
id: fimo_2012_algebra_p2_2
year: 2012
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 2"
---

Let \(\mathbb{Z}\) and \(\mathbb{Q}\) be the sets of integers and rationals respectively.

Does there exist a partition of \(\mathbb{Q}\) into three non-empty subsets \(A, B, C\) such that the sets \(A+B, B+C, C+A\) are disjoint?

The final answer is no.

---
The answer is no. Suppose that \(\mathbb{Q}\) can be partitioned into non-empty subsets \(A, B, C\) as stated. Note that for all \(a \in A, b \in B, c \in C\) one has

\[
a+b-c \in C, \quad b+c-a \in A, \quad c+a-b \in B .
\]

Indeed \(a+b-c \notin A\) as \((A+B) \cap(A+C)=\emptyset\), and similarly \(a+b-c \notin B\), hence \(a+b-c \in C\). The other two relations follow by symmetry. Hence \(A+B \subset C+C, B+C \subset A+A, C+A \subset B+B\).

The opposite inclusions also hold. Let \(a, a^{\prime} \in A\) and \(b \in B, c \in C\) be arbitrary. By (1) \(a^{\prime}+c-b \in B\), and since \(a \in A, c \in C\), we use (1) again to obtain

\[
a+a^{\prime}-b=a+\left(a^{\prime}+c-b\right)-c \in C .
\]

So \(A+A \subset B+C\) and likewise \(B+B \subset C+A, C+C \subset A+B\). In summary

\[
B+C=A+A, \quad C+A=B+B, \quad A+B=C+C .
\]

Furthermore suppose that \(0 \in A\) without loss of generality. Then \(B=\{0\}+B \subset A+B\) and \(C=\{0\}+C \subset A+C\). So, since \(B+C\) is disjoint with \(A+B\) and \(A+C\), it is also disjoint with \(B\) and \(C\). Hence \(B+C\) is contained in \(\mathbb{Z} \backslash(B \cup C)=A\). Because \(B+C=A+A\), we obtain \(A+A \subset A\). On the other hand \(A=\{0\}+A \subset A+A\), implying \(A=A+A=B+C\).

Therefore \(A+B+C=A+A+A=A\), and now \(B+B=C+A\) and \(C+C=A+B\) yield \(B+B+B=A+B+C=A, C+C+C=A+B+C=A\). In particular if \(r \in \mathbb{Q}=A \cup B \cup C\) is arbitrary then \(3 r \in A\).

However such a conclusion is impossible. Take any \(b \in B(B \neq \emptyset)\) and let \(r=b / 3 \in \mathbb{Q}\). Then \(b=3 r \in A\) which is a contradiction.
