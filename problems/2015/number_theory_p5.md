---
id: fimo_2015_number_theory_p5
year: 2015
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 5"
---

Determine all triples \((a, b, c)\) of positive integers for which \(a b-c, b c-a\), and \(c a-b\) are powers of 2.

Explanation: A power of 2 is an integer of the form \(2^{n}\), where \(n\) denotes some nonnegative integer.

The final answer is that there are sixteen such triples, namely \((2,2,2)\), the three permutations of \((2,2,3)\), and the six permutations of each of \((2,6,11)\) and \((3,5,7)\).

---
It can easily be verified that these sixteen triples are as required. Now let \((a, b, c)\) be any triple with the desired property. If we would have \(a=1\), then both \(b-c\) and \(c-b\) were powers of 2, which is impossible since their sum is zero; because of symmetry, this argument shows \(a, b, c \geqslant 2\).

Case 1. Among \(a, b\), and \(c\) there are at least two equal numbers.

Without loss of generality we may suppose that \(a=b\). Then \(a^{2}-c\) and \(a(c-1)\) are powers of 2. The latter tells us that actually \(a\) and \(c-1\) are powers of 2 . So there are nonnegative integers \(\alpha\) and \(\gamma\) with \(a=2^{\alpha}\) and \(c=2^{\gamma}+1\). Since \(a^{2}-c=2^{2 \alpha}-2^{\gamma}-1\) is a power of 2 and thus incongruent to \(-1\) modulo 4 , we must have \(\gamma \leqslant 1\). Moreover, each of the terms \(2^{2 \alpha}-2\) and \(2^{2 \alpha}-3\) can only be a power of 2 if \(\alpha=1\). It follows that the triple \((a, b, c)\) is either \((2,2,2)\) or \((2,2,3)\).

Case 2. The numbers \(a, b\), and c are distinct.

Due to symmetry we may suppose that

\[
2 \leqslant a < b < c .
\]

We are to prove that the triple \((a, b, c)\) is either \((2,6,11)\) or \((3,5,7)\). By our hypothesis, there exist three nonnegative integers \(\alpha, \beta\), and \(\gamma\) such that

\[
\begin{aligned}
b c-a & =2^{\alpha}, \\
a c-b & =2^{\beta}, \\
a b-c & =2^{\gamma} .
\end{aligned}
\]

Evidently we have

\[
\alpha > \beta > \gamma .
\]

Depending on how large \(a\) is, we divide the argument into two further cases.

Case 2.1. \(\quad a=2\).

We first prove that \(\gamma=0\). Assume for the sake of contradiction that \(\gamma > 0\). Then \(c\) is even by (4) and, similarly, \(b\) is even by (5) and (3). So the left-hand side of (2) is congruent to 2 modulo 4, which is only possible if \(b c=4\). As this contradicts (1), we have thereby shown that \(\gamma=0\), i.e., that \(c=2 b-1\)

Now (3) yields \(3 b-2=2^{\beta}\). Due to \(b > 2\) this is only possible if \(\beta \geqslant 4\). If \(\beta=4\), then we get \(b=6\) and \(c=2 \cdot 6-1=11\), which is a solution. It remains to deal with the case \(\beta \geqslant 5\). Now (2) implies

\[
9 \cdot 2^{\alpha}=9 b(2 b-1)-18=(3 b-2)(6 b+1)-16=2^{\beta}\left(2^{\beta+1}+5\right)-16,
\]

and by \(\beta \geqslant 5\) the right-hand side is not divisible by 32 . Thus \(\alpha \leqslant 4\) and we get a contradiction to \((5)\) Case 2.2. \(a \geqslant 3\).

Pick an integer \(\vartheta \in\{-1,+1\}\) such that \(c-\vartheta\) is not divisible by 4 . Now

\[
2^{\alpha}+\vartheta \cdot 2^{\beta}=\left(b c-a \vartheta^{2}\right)+\vartheta(c a-b)=(b+a \vartheta)(c-\vartheta)
\]

is divisible by \(2^{\beta}\) and, consequently, \(b+a \vartheta\) is divisible by \(2^{\beta-1}\). On the other hand, \(2^{\beta}=a c-b > \) \((a-1) c \geqslant 2 c\) implies in view of \((1)\) that \(a\) and \(b\) are smaller than \(2^{\beta-1}\). All this is only possible if \(\vartheta=1\) and \(a+b=2^{\beta-1}\). Now (3) yields

\[
a c-b=2(a+b),
\]

whence \(4 b > a+3 b=a(c-1) \geqslant a b\), which in turn yields \(a=3\).

So (6) simplifies to \(c=b+2\) and (2) tells us that \(b(b+2)-3=(b-1)(b+3)\) is a power of 2. Consequently, the factors \(b-1\) and \(b+3\) are powers of 2 themselves. Since their difference is 4 , this is only possible if \(b=5\) and thus \(c=7\). Thereby the solution is complete.
