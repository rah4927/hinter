---
id: fimo_2014_number_theory_p6
year: 2014
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 6"
---

Let \(a_{1} < a_{2} < \cdots < a_{n}\) be pairwise coprime positive integers with \(a_{1}\) being prime and \(a_{1} \geqslant n+2\). On the segment \(I=\left[0, a_{1} a_{2} \cdots a_{n}\right]\) of the real line, mark all integers that are divisible by at least one of the numbers \(a_{1}, \ldots, a_{n}\). These points split \(I\) into a number of smaller segments. Prove that the sum of the squares of the lengths of these segments is divisible by \(a_{1}\).

---
Let \(A=a_{1} \cdots a_{n}\). Throughout the solution, all intervals will be nonempty and have integer end-points. For any interval \(X\), the length of \(X\) will be denoted by \(|X|\).
Define the following two families of intervals:
\[
\begin{aligned}
& \mathcal{S}=\{[x, y]: x < y \text { are consecutive marked points }\} \\
& \mathcal{T}=\{[x, y]: x < y \text { are integers, } 0 \leqslant x \leqslant A-1, \text { and no point is marked in }(x, y)\}
\end{aligned}
\]
We are interested in computing \(\sum_{X \in \mathcal{S}}|X|^{2} \operatorname{modulo} a_{1}\).
Note that the number \(A\) is marked, so in the definition of \(\mathcal{T}\) the condition \(y \leqslant A\) is enforced without explicitly prescribing it.
Assign weights to the intervals in \(\mathcal{T}\), depending only on their lengths. The weight of an arbitrary interval \(Y \in \mathcal{T}\) will be \(w(|Y|)\), where
\[
w(k)= \begin{cases}1 & \text { if } k=1 \\ 2 & \text { if } k \geqslant 2\end{cases}
\]
Consider an arbitrary interval \(X \in \mathcal{S}\) and its sub-intervals \(Y \in \mathcal{T}\). Clearly, \(X\) has one sub-interval of length \(|X|\), two sub-intervals of length \(|X|-1\) and so on; in general \(X\) has \(|X|-d+1\) sub-intervals of length \(d\) for every \(d=1,2, \ldots,|X|\). The sum of the weights of the sub-intervals of \(X\) is
\(\sum_{Y \in \mathcal{T}, Y \subseteq X} w(|Y|)=\sum_{d=1}^{|X|}(|X|-d+1) \cdot w(d)=|X| \cdot 1+((|X|-1)+(|X|-2)+\cdots+1) \cdot 2=|X|^{2}\).
Since the intervals in \(\mathcal{S}\) are non-overlapping, every interval \(Y \in \mathcal{T}\) is a sub-interval of a single interval \(X \in \mathcal{S}\). Therefore,
\[
\sum_{X \in \mathcal{S}}|X|^{2}=\sum_{X \in \mathcal{S}}\left(\sum_{Y \in \mathcal{T}, Y \subseteq X} w(|Y|)\right)=\sum_{Y \in \mathcal{T}} w(|Y|)
\]
For every \(d=1,2, \ldots, a_{1}\), we count how many intervals in \(\mathcal{T}\) are of length \(d\). Notice that the multiples of \(a_{1}\) are all marked, so the lengths of the intervals in \(\mathcal{S}\) and \(\mathcal{T}\) cannot exceed \(a_{1}\). Let \(x\) be an arbitrary integer with \(0 \leqslant x \leqslant A-1\) and consider the interval \([x, x+d]\). Let \(r_{1}\), \(\ldots, r_{n}\) be the remainders of \(x\) modulo \(a_{1}, \ldots, a_{n}\), respectively. Since \(a_{1}, \ldots, a_{n}\) are pairwise coprime, the number \(x\) is uniquely identified by the sequence \(\left(r_{1}, \ldots, r_{n}\right)\), due to the Chinese remainder theorem.
For every \(i=1, \ldots, n\), the property that the interval \((x, x+d)\) does not contain any multiple of \(a_{i}\) is equivalent with \(r_{i}+d \leqslant a_{i}\), i.e. \(r_{i} \in\left\{0,1, \ldots, a_{i}-d\right\}\), so there are \(a_{i}-d+1\) choices for the number \(r_{i}\) for each \(i\). Therefore, the number of the remainder sequences \(\left(r_{1}, \ldots, r_{n}\right)\) that satisfy \([x, x+d] \in \mathcal{T}\) is precisely \(\left(a_{1}+1-d\right) \cdots\left(a_{n}+1-d\right)\). Denote this product by \(f(d)\). Now we can group the last sum in (1) by length of the intervals. As we have seen, for every \(d=1, \ldots, a_{1}\) there are \(f(d)\) intervals \(Y \in \mathcal{T}\) with \(|Y|=d\). Therefore, (1) can be continued as
\[
\sum_{X \in \mathcal{S}}|X|^{2}=\sum_{Y \in \mathcal{T}} w(|Y|)=\sum_{d=1}^{a_{1}} f(d) \cdot w(d)=2 \sum_{d=1}^{a_{1}} f(d)-f(1)
\]
Having the formula (2), the solution can be finished using the following well-known fact: Lemma. If \(p\) is a prime, \(F(x)\) is a polynomial with integer coefficients, and \(\operatorname{deg} F \leqslant p-2\), then \(\sum_{x=1}^{p} F(x)\) is divisible by \(p\)
Proof. Obviously, it is sufficient to prove the lemma for monomials of the form \(x^{k}\) with \(k \leqslant p-2\). Apply induction on \(k\). If \(k=0\) then \(F=1\), and the statement is trivial.
Let \(1 \leqslant k \leqslant p-2\), and assume that the lemma is proved for all lower degrees. Then
\[
\begin{aligned}
0 & \equiv p^{k+1}=\sum_{x=1}^{p}\left(x^{k+1}-(x-1)^{k+1}\right)=\sum_{x=1}^{p}\left(\sum_{\ell=0}^{k}(-1)^{k-\ell}\left(\begin{array}{c}
k+1 \\
\ell
\end{array}\right) x^{\ell}\right) \\
& =(k+1) \sum_{x=1}^{p} x^{k}+\sum_{\ell=0}^{k-1}(-1)^{k-\ell}\left(\begin{array}{c}
k+1 \\
\ell
\end{array}\right) \sum_{x=1}^{p} x^{\ell} \equiv(k+1) \sum_{x=1}^{p} x^{k} \quad(\bmod p)
\end{aligned}
\]
Since \(0 < k+1 < p\), this proves \(\sum_{x=1}^{p} x^{k} \equiv 0(\bmod p)\).
In (2), by applying the lemma to the polynomial \(f\) and the prime \(a_{1}\), we obtain that \(\sum_{d=1}^{a_{1}} f(d)\) is divisible by \(a_{1}\). The term \(f(1)=a_{1} \cdots a_{n}\) is also divisible by \(a_{1}\); these two facts together prove that \(\sum_{X \in \mathcal{S}}|X|^{2}\) is divisible by \(a_{1}\).
