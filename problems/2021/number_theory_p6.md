---
id: fimo_2021_number_theory_p6
year: 2021
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 6"
---

Determine all integers \(n \geqslant 2\) with the following property: every \(n\) pairwise distinct integers whose sum is not divisible by \(n\) can be arranged in some order \(a_{1}, a_{2}, \ldots, a_{n}\) so that \(n\) divides \(1 \cdot a_{1}+2 \cdot a_{2}+\cdots+n \cdot a_{n}\).


---
If \(n=2^{k} a\), where \(a \geqslant 3\) is odd and \(k\) is a positive integer, we can consider a set containing the number \(2^{k}+1\) and \(n-1\) numbers congruent to 1 modulo \(n\). The sum of these numbers is congruent to \(2^{k}\) modulo \(n\) and therefore is not divisible by \(n\); for any permutation \(\left(a_{1}, a_{2}, \ldots, a_{n}\right)\) of these numbers
\[
1 \cdot a_{1}+2 \cdot a_{2}+\cdots+n \cdot a_{n} \equiv 1+\cdots+n \equiv 2^{k-1} a\left(2^{k} a+1\right) \not \equiv 0 \quad\left(\bmod 2^{k}\right)
\]
and a fortiori \(1 \cdot a_{1}+2 \cdot a_{2}+\cdots+n \cdot a_{n}\) is not divisible by \(n\).
From now on, we suppose that \(n\) is either odd or a power of 2 . Let \(S\) be the given set of integers, and \(s\) be the sum of elements of \(S\).
Lemma 1. If there is a permutation \(\left(a_{i}\right)\) of \(S\) such that \((n, s)\) divides \(\sum_{i=1}^{n} i a_{i}\), then there is a permutation \(\left(b_{i}\right)\) of \(S\) such that \(n\) divides \(\sum_{i=1}^{n} i b_{i}\).
Proof. Let \(r=\sum_{i=1}^{n} i a_{i}\). Consider the permutation \(\left(b_{i}\right)\) defined by \(b_{i}=a_{i+x}\), where \(a_{j+n}=a_{j}\). For this permutation, we have
\[
\sum_{i=1}^{n} i b_{i}=\sum_{i=1}^{n} i a_{i+x} \equiv \sum_{i=1}^{n}(i-x) a_{i} \equiv r-s x \quad(\bmod n) .
\]
Since \((n, s)\) divides \(r\), the congruence \(r-s x \equiv 0(\bmod n)\) admits a solution.
Lemma 2. Every set \(T\) of \(k m\) integers, \(m > 1\), can be partitioned into \(m\) sets of \(k\) integers so that in every set either the sum of elements is not divisible by \(k\) or all the elements leave the same remainder upon division by \(k\).
Proof. The base case, \(m=2\). If \(T\) contains \(k\) elements leaving the same remainder upon division by \(k\), we form one subset \(A\) of these elements; the remaining elements form a subset \(B\). If \(k\) does not divide the sum of all elements of \(B\), we are done. Otherwise it is enough to exchange any element of \(A\) with any element of \(B\) not congruent to it modulo \(k\), thus making sums of both \(A\) and \(B\) not divisible by \(k\). This cannot be done only when all the elements of \(T\) are congruent modulo \(k\); in this case any partition will do.
If no \(k\) elements of \(T\) have the same residue modulo \(k\), there are three elements \(a, b, c \in T\) leaving pairwise distinct remainders upon division by \(k\). Let \(t\) be the sum of elements of \(T\). It suffices to find \(A \subset T\) such that \(|A|=k\) and \(\sum_{x \in A} x \not \equiv 0, t(\bmod k)\) : then neither the sum of elements of \(A\) nor the sum of elements of \(B=T \backslash A\) is divisible by \(k\). Consider \(U^{\prime} \subset T \backslash\{a, b, c\}\) with \(\left|U^{\prime}\right|=k-1\). The sums of elements of three sets \(U^{\prime} \cup\{a\}, U^{\prime} \cup\{b\}, U^{\prime} \cup\{c\}\) leave three different remainders upon division by \(k\), and at least one of them is not congruent either to 0 or to \(t\).
Now let \(m > 2\). If \(T\) contains \(k\) elements leaving the same remainder upon division by \(k\), we form one subset \(A\) of these elements and apply the inductive hypothesis to the remaining \(k(m-1)\) elements. Otherwise, we choose any \(U \subset T,|U|=k-1\). Since all the remaining elements cannot be congruent modulo \(k\), there is \(a \in T \backslash U\) such that \(a \not \equiv-\sum_{x \in U} x(\bmod k)\). Now we can take \(A=U \cup\{a\}\) and apply the inductive hypothesis to \(T \backslash A\). Now we are ready to prove the statement of the problem for all odd \(n\) and \(n=2^{k}\). The proof is by induction.
If \(n\) is prime, the statement follows immediately from Lemma 1, since in this case \((n, s)=1\). Turning to the general case, we can find prime \(p\) and an integer \(t\) such that \(p^{t} \mid n\) and \(p^{t} \nmid s\). By Lemma 2, we can partition \(S\) into \(p\) sets of \(\frac{n}{p}=k\) elements so that in every set either the sum of numbers is not divisible by \(k\) or all numbers have the same residue modulo \(k\).
For sets in the first category, by the inductive hypothesis there is a permutation \(\left(a_{i}\right)\) such that \(k \mid \sum_{i=1}^{k} i a_{i}\)
If \(n\) (and therefore \(k\) ) is odd, then for each permutation \(\left(b_{i}\right)\) of a set in the second category we have
\[
\sum_{i=1}^{k} i b_{i} \equiv b_{1} \frac{k(k+1)}{2} \equiv 0 \quad(\bmod k)
\]
By combining such permutation for all sets of the partition, we get a permutation \(\left(c_{i}\right)\) of \(S\) such that \(k \mid \sum_{i=1}^{n} i c_{i}\). Since this sum is divisible by \(k\), and \(k\) is divisible by \((n, s)\), we are done by Lemma 1 .
If \(n=2^{s}\), we have \(p=2\) and \(k=2^{s-1}\). Then for each of the subsets there is a permutation \(\left(a_{1}, \ldots, a_{k}\right)\) such that \(\sum_{i=1}^{k} i a_{i}\) is divisible by \(2^{s-2}=\frac{k}{2}\) : if the subset belongs to the first category, the expression is divisible even by \(k\), and if it belongs to the second one,
\[
\sum_{i=1}^{k} i a_{i} \equiv a_{1} \frac{k(k+1)}{2} \equiv 0\left(\bmod \frac{k}{2}\right) \text {. }
\]
Now the numbers of each permutation should be multiplied by all the odd or all the even numbers not exceeding \(n\) in increasing order so that the resulting sums are divisible by \(k\) :
\[
\sum_{i=1}^{k}(2 i-1) a_{i} \equiv \sum_{i=1}^{k} 2 i a_{i} \equiv 2 \sum_{i=1}^{k} i a_{i} \equiv 0 \quad(\bmod k) .
\]
Combining these two sums, we again get a permutation \(\left(c_{i}\right)\) of \(S\) such that \(k \mid \sum_{i=1}^{n} i c_{i}\), and finish the case by applying Lemma 1.
